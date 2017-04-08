import { Component, OnInit } from '@angular/core';
import {CampaignService} from '../../campaign.service';
import {CampaignISPStatistics} from './campaign-isp-statistics';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-isp-statistics',
  templateUrl: './isp-statistics.component.html',
  styleUrls: ['../email-statistics/email-statistics.component.css']
})
export class ISPStatisticsComponent implements OnInit {

  ispStatistics: CampaignISPStatistics[] = [];
  isCustomISP = false;

  constructor(private campaignService: CampaignService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.ispStatistics = this.campaignService.getISPStatistics();
    this.activatedRoute.params.subscribe((params: Params) => {
      if (!params['fields']) {
        this.isCustomISP = true;
      }
    });
  }

}
