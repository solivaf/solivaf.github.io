import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {CampaignModule} from './campaign/campaign.module';
import {RouterModule} from '@angular/router';
import {BaseComponent} from './base.component';
import {BaseAppRouting} from './app.routing.module';
import {ListsModule} from './lists/lists.module';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header.component';
import {AuthService} from "./auth/auth.service";
import {AuthCanActivateGuard} from "./auth/auth-can-activate.guard";

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    AuthComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    BaseAppRouting,
    ListsModule,
    CampaignModule
  ],
  providers: [AuthService, AuthCanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
