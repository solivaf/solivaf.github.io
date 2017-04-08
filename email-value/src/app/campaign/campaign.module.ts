/**
 * Created by fernando on 02/04/17.
 */
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ChartsModule} from 'ng2-charts';

import {AuthService} from '../auth/auth.service';
import {CampaignService} from './campaign.service';

import {CampaignComponent} from './campaign.component';
import {CampaignRoutingModule} from './campaign.routing.module';
import {CampaignListComponent} from './campaign-list/campaign-list.component';
import {CampaignCreationComponent} from './campaign-creation/campaign-creation.component';
import {CampaignStatisticsComponent} from './campaign-statistics/campaign-statistics.component';
import {GlobalStatisticsComponent} from './campaign-statistics/global-statistics/global-statistics.component';
import {EmailStatisticsComponent} from './campaign-statistics/email-statistics/email-statistics.component';
import {OpeningStatisticsComponent} from './campaign-statistics/opening-statistics/opening-statistics.component';

import {AuthCanActivateGuard} from '../auth/auth-can-activate.guard';
import {ClickThroughStatisticsComponent} from './campaign-statistics/click-through-statistics/click-through-statistics.component';
import {DevicesStatisticsComponent} from './campaign-statistics/devices-statistics/devices-statistics.component';
import {ISPStatisticsComponent} from './campaign-statistics/isp-statistics/isp-statistics.component';
import {MapStatisticsComponent} from './campaign-statistics/map-statistics/map-statistics.component';
import {NguiMapModule} from '@ngui/map';
import {CustomStatisticsComponent} from './campaign-statistics/custom-statistics/custom-statistics.component';
import {MdProgressBarModule} from '@angular2-material/progress-bar';
import { DynamicComponent } from './campaign-creation/dynamic/dynamic.component';
import {TemplateComponent} from "./campaign-creation/template/template.component";
import { BasicDetailsComponent } from './campaign-creation/basic-details/basic-details.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ChartsModule,
    CampaignRoutingModule,
    MdProgressBarModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCu8U7JmB8Y5hj28Ab3wECW99nCXoQYBkk'})
  ],
  declarations: [
    CampaignComponent,
    CampaignListComponent,
    CampaignStatisticsComponent,
    CampaignCreationComponent,
    GlobalStatisticsComponent,
    EmailStatisticsComponent,
    OpeningStatisticsComponent,
    ClickThroughStatisticsComponent,
    DevicesStatisticsComponent,
    ISPStatisticsComponent,
    MapStatisticsComponent,
    CustomStatisticsComponent,
    DynamicComponent,
    TemplateComponent,
    BasicDetailsComponent
  ],
  providers: [CampaignService, AuthService, AuthCanActivateGuard]
})
export class CampaignModule {}
