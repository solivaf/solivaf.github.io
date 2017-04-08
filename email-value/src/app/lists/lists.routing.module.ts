import {RouterModule, Routes} from '@angular/router';
import {ListsComponent} from './lists.component';
import {NgModule} from '@angular/core';
/**
 * Created by fernando on 02/04/17.
 */

const listRouting: Routes = [
  { path: 'lists', component: ListsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(listRouting)
  ],
  exports: [
    RouterModule
  ]
})
export class ListsRoutingModule {}
