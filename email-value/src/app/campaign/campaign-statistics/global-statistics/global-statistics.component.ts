import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {CampaignService} from '../../campaign.service';
import {Campaign} from '../../campaign';
import {CampaignStatistics} from '../campaign-statistics';
import {StatisticsChart} from '../statistics-chart';

@Component({
  selector: 'app-global-statistics',
  templateUrl: './global-statistics.component.html',
  styleUrls: ['./global-statistics.component.css']
})
export class GlobalStatisticsComponent implements OnInit {

  chartModel: StatisticsChart = new StatisticsChart();
  campaignId;
  campaignStatistics: CampaignStatistics;
  campaign: Campaign;

  constructor(private campaignService: CampaignService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.parent.params.subscribe((params: Params) => this.campaignId = params['id']);
  }

  ngOnInit() {
    this.campaignStatistics = this.campaignService.getStatistics();
    this.campaign = this.campaignService.selectedCampaign;
  }

}
