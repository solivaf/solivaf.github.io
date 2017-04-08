import {CampaignGlobalStatistics} from './global-statistics/campaign-global-statistics';
import {CampaignEmailStatistics} from './email-statistics/campaign-email-statistics';
import {CampaignOpeningStatistics} from './opening-statistics/campaign-opening-statistics';
import {CampaignClickThroughStatistics} from './click-through-statistics/campaign-click-through-statistics';
import {CampaignDevicesStatistics} from './devices-statistics/campaign-devices-statistics';
import {CampaignISPStatistics} from './isp-statistics/campaign-isp-statistics';

export class CampaignStatistics {

  constructor(public campaignId, public globalStatistic: CampaignGlobalStatistics, public emailStatistics?: CampaignEmailStatistics[],
              public openingStatistics?: CampaignOpeningStatistics[], public clickThroughStatistics?: CampaignClickThroughStatistics[],
              public devicesStatistics?: CampaignDevicesStatistics[], public ispStatistics?: CampaignISPStatistics[]) {
  }

}
