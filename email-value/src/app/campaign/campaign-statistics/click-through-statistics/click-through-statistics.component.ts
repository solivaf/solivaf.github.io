import { Component, OnInit } from '@angular/core';
import {CampaignClickThroughStatistics} from './campaign-click-through-statistics';
import {CampaignService} from '../../campaign.service';

@Component({
  selector: 'app-click-through-statistics',
  templateUrl: './click-through-statistics.component.html',
  styleUrls: ['../email-statistics/email-statistics.component.css']
})
export class ClickThroughStatisticsComponent implements OnInit {

  clickThroughStatistics: CampaignClickThroughStatistics[] = [];

  constructor(private campaignService: CampaignService) { }

  ngOnInit() {
    this.clickThroughStatistics = this.campaignService.getClickThroughStatistics();
  }

}
