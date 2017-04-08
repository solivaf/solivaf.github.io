import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Router} from '@angular/router';
import {CampaignService} from '../campaign.service';
import {Location} from '@angular/common';
import {TemplateComponent} from "./template/template.component";
import {BasicDetailsComponent} from "./basic-details/basic-details.component";

@Component({
  selector: 'app-campaign-creation',
  templateUrl: './campaign-creation.component.html',
  styleUrls: ['./campaign-creation.component.css']
})
export class CampaignCreationComponent implements OnInit {

  componentData = null;
  pbValue = 15;

  @ViewChild('name') nameContainer: ViewContainerRef;

  constructor() { }

  ngOnInit() {
    this.createBasicDetailsComponent();
  }

  createBasicDetailsComponent() {
    this.componentData = {
      component: BasicDetailsComponent,
      inputs: {
        showNum: 9
      }
    };
  }

  onSaveAndQuit() {
    const listName = this.nameContainer.element.nativeElement.value;
    console.log(listName);
    // this.campaignService.saveCampaign(listName, campaignName);
    // this.location.back();
  }

  onNext() {
    console.log(this.nameContainer.element.nativeElement.value);
    // this.campaignService.saveCampaign(listName, campaignName);
    // this.createTemplateComponent();
  }
}
