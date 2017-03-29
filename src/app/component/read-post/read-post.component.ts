import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Post} from "../../model/post";
import {PostService} from "../../service/post.service";

@Component({
  selector: 'app-read-post',
  templateUrl: './read-post.component.html',
  styleUrls: ['./read-post.component.css']
})
export class ReadPostComponent implements OnInit {

  post = {};

  constructor(private activatedRouter: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe(
      (params: any) => {
        this.post = this.postService.getPost(params['id']);
        console.log(this.post);
      }
    )
  }

}
