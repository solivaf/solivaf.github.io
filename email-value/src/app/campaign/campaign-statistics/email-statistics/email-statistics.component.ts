import {Component, OnInit} from '@angular/core';
import {CampaignService} from '../../campaign.service';
import {CampaignEmailStatistics} from './campaign-email-statistics';

@Component({
  selector: 'app-email-statistics',
  templateUrl: './email-statistics.component.html',
  styleUrls: ['./email-statistics.component.css']
})
export class EmailStatisticsComponent implements OnInit {

  emailStatistics: CampaignEmailStatistics[] = [];

  constructor(private campaignService: CampaignService) { }

  ngOnInit() {
    this.emailStatistics = this.campaignService.getEmailStatistics();
  }

}
