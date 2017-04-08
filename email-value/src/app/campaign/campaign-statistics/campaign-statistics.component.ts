import {Component, OnInit} from '@angular/core';
import {CampaignService} from '../campaign.service';
import {Campaign} from '../campaign';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-campaign-statistics',
  templateUrl: './campaign-statistics.component.html'
})
export class CampaignStatisticsComponent implements OnInit {

  campaign: Campaign;

  constructor (private activatedRoute: ActivatedRoute, private campaignService: CampaignService) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.campaign = this.campaignService.getCampaign(params['id']);
    });
  }

  ngOnInit(): void {
  }

}
