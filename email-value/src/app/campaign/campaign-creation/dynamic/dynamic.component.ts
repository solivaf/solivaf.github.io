import {
  Component, ComponentFactoryResolver, Input, OnInit, ReflectiveInjector, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {TemplateComponent} from '../template/template.component';
import {BasicDetailsComponent} from '../basic-details/basic-details.component';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  entryComponents: [BasicDetailsComponent, TemplateComponent]
})
export class DynamicComponent implements OnInit {

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;
  currentComponent: any = null;

  constructor(private resolver: ComponentFactoryResolver) {
  }
  ngOnInit() {
  }

  @Input() set componentData(data: {component: any, inputs: any }) {
    if (!data) {
      return;
    }

    // Inputs need to be in the following format to be resolved properly
    let inputProviders = Object.keys(data.inputs).map((inputName) => {return {provide: inputName, useValue: data.inputs[inputName]};});
    let resolvedInputs = ReflectiveInjector.resolve(inputProviders);

    // We create an injector out of the data we want to pass down and this components injector
    let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);

    // We create a factory out of the component we want to create
    let factory = this.resolver.resolveComponentFactory(data.component);

    // We create the component using the factory and the injector
    let component = factory.create(injector);

    // We insert the component into the dom container
    this.dynamicComponentContainer.insert(component.hostView);

    // Destroy the previously created component
    if (this.currentComponent) {
      this.currentComponent.destroy();
    }

    this.currentComponent = component;
  }
}
