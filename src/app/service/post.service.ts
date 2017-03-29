import { Injectable } from '@angular/core';
import {Post} from "../model/post";

@Injectable()
export class PostService {

  posts: Post[] = [
    new Post(
      'Man must explore, and this is exploration at its greatest',
      'Problems look mighty small from 150 miles up', 'Fernando Soliva', new Date(),
      "Content", 'https://preview.ibb.co/fNYmAa/post_bg.jpg'
    )
  ];

  constructor() { }


  getPosts() {
    return this.posts;
  }

  getPost(index: number) {
    return this.posts[index];
  }
}
