/**
 * Created by fernando on 02/04/17.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ListsRoutingModule} from './lists.routing.module';
import {ListsComponent} from './lists.component';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ListsRoutingModule
  ],
  declarations: [
    ListsComponent
  ]
})
export class ListsModule {}
