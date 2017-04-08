import { Component, OnInit } from '@angular/core';
import {CampaignOpeningStatistics} from './campaign-opening-statistics';
import {CampaignService} from '../../campaign.service';

@Component({
  selector: 'app-opening',
  templateUrl: './opening-statistics.component.html',
  styleUrls: ['../email-statistics/email-statistics.component.css']
})
export class OpeningStatisticsComponent implements OnInit {

  openingStatistics: CampaignOpeningStatistics[] = [];

  constructor(private campaignService: CampaignService) { }

  ngOnInit() {
    this.openingStatistics = this.campaignService.getOpeningStatistics();
  }

}
