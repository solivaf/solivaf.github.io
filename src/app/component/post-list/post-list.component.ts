import { Component, OnInit } from '@angular/core';
import {Post} from "../../model/post";
import {PostService} from "../../service/post.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})
export class ListPostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

}
