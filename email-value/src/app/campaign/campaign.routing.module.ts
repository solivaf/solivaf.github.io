import {RouterModule, Routes} from '@angular/router';
import {CampaignComponent} from './campaign.component';
import {NgModule} from '@angular/core';
import {CampaignListComponent} from './campaign-list/campaign-list.component';
import {CampaignStatisticsComponent} from './campaign-statistics/campaign-statistics.component';
import {CampaignCreationComponent} from './campaign-creation/campaign-creation.component';
import {GlobalStatisticsComponent} from './campaign-statistics/global-statistics/global-statistics.component';
import {EmailStatisticsComponent} from './campaign-statistics/email-statistics/email-statistics.component';
import {AuthCanActivateGuard} from '../auth/auth-can-activate.guard';
import {OpeningStatisticsComponent} from "./campaign-statistics/opening-statistics/opening-statistics.component";
import {ClickThroughStatisticsComponent} from "./campaign-statistics/click-through-statistics/click-through-statistics.component";
import {DevicesStatisticsComponent} from "./campaign-statistics/devices-statistics/devices-statistics.component";
import {ISPStatisticsComponent} from "./campaign-statistics/isp-statistics/isp-statistics.component";
import {MapStatisticsComponent} from "./campaign-statistics/map-statistics/map-statistics.component";
import {CustomStatisticsComponent} from "./campaign-statistics/custom-statistics/custom-statistics.component";
/**
 * Created by fernando on 01/04/17.
 */

const campaignRoutes: Routes = [
  {
    path: 'campaign', component: CampaignComponent, canActivate: [AuthCanActivateGuard], children: [
    {path: '', redirectTo: 'all', pathMatch: 'full'},
    {path: 'all', component: CampaignListComponent},
    {
      path: 'statistics/:id', component: CampaignStatisticsComponent, children: [
      {path: '', redirectTo: 'global', pathMatch: 'full'},
      {path: 'global', component: GlobalStatisticsComponent},
      {path: 'email', component: EmailStatisticsComponent},
      {path: 'opening', component: OpeningStatisticsComponent},
      {path: 'click-through', component: ClickThroughStatisticsComponent},
      {path: 'devices', component: DevicesStatisticsComponent},
      {path: 'isp', component: ISPStatisticsComponent},
      {path: 'map', component: MapStatisticsComponent},
      {path: 'custom', component: CustomStatisticsComponent}
    ]
    },
    {path: 'new', component: CampaignCreationComponent}
  ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(campaignRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CampaignRoutingModule {
}
