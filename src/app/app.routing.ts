import {Routes, RouterModule} from "@angular/router";
import {ListPostsComponent} from "./component/post-list/post-list.component";
import {ReadPostComponent} from "./component/read-post/read-post.component";
import {MeComponent} from "./component/me/me.component";
/**
 * Created by luissoliva on 3/28/17.
 */

const ROUTES: Routes = [
  {path: '', component: ListPostsComponent},
  {path: 'about', component: MeComponent},
  {path: ':id', component: ReadPostComponent}
];

export const routing = RouterModule.forRoot(ROUTES);
