import {Injectable} from '@angular/core';
import {Campaign} from './campaign';
import {Subject} from 'rxjs/Subject';

import {CampaignGlobalStatistics} from './campaign-statistics/global-statistics/campaign-global-statistics';
import {CampaignStatistics} from './campaign-statistics/campaign-statistics';
import {CampaignEmailStatistics} from './campaign-statistics/email-statistics/campaign-email-statistics';
import {CampaignOpeningStatistics} from './campaign-statistics/opening-statistics/campaign-opening-statistics';
import {CampaignClickThroughStatistics} from './campaign-statistics/click-through-statistics/campaign-click-through-statistics';
import {CampaignDevicesStatistics} from './campaign-statistics/devices-statistics/campaign-devices-statistics';
import {CampaignISPStatistics} from './campaign-statistics/isp-statistics/campaign-isp-statistics';

@Injectable()
export class CampaignService {

  campaigns: Campaign[] = [
    new Campaign('0', 'Test Campaign', 'Subject A', 'Sent', new Date(), 20, 20, 20, 'lfernando.soliva@gmail.com'),
    new Campaign('1', 'Test Campaign', 'Subject B', 'Sent', new Date(), 20, 20, 20, 'lfernando.soliva@gmail.com'),
    new Campaign('2', 'Test Campaign', 'Subject C', 'Unsent', new Date(), 20, 20, 20, 'lfernando.soliva@gmail.com')
  ];

  campaignStatistics: CampaignStatistics[] = [
    new CampaignStatistics('0',
      new CampaignGlobalStatistics(300, 299, 200, 120, 1, 2, 2),
      [
        new CampaignEmailStatistics('Sent', 'user@domain.com', new Date()),
        new CampaignEmailStatistics('Sent', 'user2@domain.com', new Date()),
        new CampaignEmailStatistics('Unset', 'user3@domain.com', new Date())
      ],
      [
        new CampaignOpeningStatistics('email@domain.com', '00:00:29', new Date()),
        new CampaignOpeningStatistics('email2@domain.com', '00:01:09', new Date()),
        new CampaignOpeningStatistics('email3@domain.com', '00:00:15', new Date())
      ],
      [
        new CampaignClickThroughStatistics('URL 1', 356),
        new CampaignClickThroughStatistics('URL 2', 45),
        new CampaignClickThroughStatistics('URL Unsubscribe', 4)
      ],
      [
        new CampaignDevicesStatistics('iPhone 6', 'Safari', 356),
        new CampaignDevicesStatistics('HTC One', 'Chrome Mobile', 243),
        new CampaignDevicesStatistics('Compute PC', 'Opera', 3)
      ],
      [
        new CampaignISPStatistics('Orange', 40, 3, 3),
        new CampaignISPStatistics('Bouygues Telecom', 20, 4, 4),
        new CampaignISPStatistics('Undefined', 13, 2, 4)
      ]),
    new CampaignStatistics('1', new CampaignGlobalStatistics(500, 499, 300, 220, 10, 20, 20), [], [], [], []),
    new CampaignStatistics('2', new CampaignGlobalStatistics(100, 100, 80, 20, 1, 2, 2), [], [], [], [])
  ];

  searchTerm$ = new Subject<string>();

  searchedCampaigns: Campaign[] = [];

  selectedCampaign: Campaign;

  constructor() {
  }

  deleteCampaigns() {
    this.campaigns
      .filter((campaign) => this.getSelectedCampaign(campaign))
      .forEach((campaign) => this.campaigns.splice(this.campaigns.indexOf(campaign), 1));
  }

  selectCampaigns() {
    this.campaigns.forEach((campaign) => campaign.selected = !campaign.selected);
  }

  selectCampaignsByTerm(term: string) {
    this.searchedCampaigns = this.campaigns
      .filter((campaign) => this.matchTerm(campaign, term))
      .map((campaign) => campaign);

    return this.searchedCampaigns;
  }

  matchTerm(campaign: Campaign, term: string) {
    if (campaign.name.match(term) || campaign.subject.match(term) || campaign.status.match(term)) {
      return campaign;
    }
  }

  getSelectedCampaign(campaign: Campaign) {
    if (campaign.selected) {
      return campaign;
    }
  }

  getCampaign(campaignId: string) {
    this.selectedCampaign = this.campaigns[campaignId];
    return this.selectedCampaign;
  }

  getStatistics() {
    return this.campaignStatistics.filter((cs) => cs.campaignId === this.selectedCampaign.id)
      .map((campaignStatistics) => campaignStatistics)[0];
  }

  getEmailStatistics(): CampaignEmailStatistics[] {
    return this.getStatistics().emailStatistics;
  }

  getOpeningStatistics(): CampaignOpeningStatistics[] {
    return this.getStatistics().openingStatistics;
  }

  getClickThroughStatistics(): CampaignClickThroughStatistics[] {
    return this.getStatistics().clickThroughStatistics;
  }

  getDevicesStatistics() {
    return this.getStatistics().devicesStatistics;
  }

  getISPStatistics() {
    return this.getStatistics().ispStatistics;
  }

  saveCampaign(listName: string, campaignName: string) {
    console.log(listName + ' - ' + campaignName);
  }
}
