import { Component, OnInit } from '@angular/core';
import {CampaignDevicesStatistics} from './campaign-devices-statistics';
import {CampaignService} from '../../campaign.service';

@Component({
  selector: 'app-devices-statistics',
  templateUrl: './devices-statistics.component.html',
  styleUrls: ['../email-statistics/email-statistics.component.css']
})
export class DevicesStatisticsComponent implements OnInit {

  devicesStatistics: CampaignDevicesStatistics[] = [];

  constructor(private campaignService: CampaignService) { }

  ngOnInit() {
    this.devicesStatistics = this.campaignService.getDevicesStatistics();
  }

}
