import {RouterModule, Routes} from '@angular/router';
import {BaseComponent} from './base.component';
import {NgModule} from '@angular/core';
import {AuthComponent} from './auth/auth.component';

/**
 * Created by fernando on 02/04/17.
 */

const baseRouting: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: BaseComponent},
  { path: 'login', component: AuthComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(baseRouting)
  ],
  exports: [
    RouterModule
  ]
})
export class BaseAppRouting {}
