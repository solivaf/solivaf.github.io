import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./component/header/header.component";
import {ListPostsComponent} from "./component/post-list/post-list.component";
import {FooterComponent} from "./component/footer/footer.component";
import {ReadPostComponent} from "./component/read-post/read-post.component";
import {routing} from "./app.routing";
import {PostService} from "./service/post.service";
import { MeComponent } from './component/me/me.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListPostsComponent,
    FooterComponent,
    ReadPostComponent,
    MeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
