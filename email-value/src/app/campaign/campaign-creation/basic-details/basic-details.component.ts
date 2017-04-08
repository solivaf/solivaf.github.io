import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {TemplateComponent} from '../template/template.component';
import {CampaignService} from '../../campaign.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css']
})
export class BasicDetailsComponent implements OnInit {

  componentData = null;

  constructor(private campaignService: CampaignService, private location: Location) {
  }

  ngOnInit() {
  }

  createTemplateComponent() {
    this.componentData = {
      component: TemplateComponent,
      inputs: {
        showNum: 9
      }
    };
  }
}
