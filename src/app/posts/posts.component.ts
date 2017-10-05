import { Component, OnInit } from '@angular/core';

import { PostsService }       from './posts.service';

import * as _ from 'underscore'; 

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts = [];
  pagedPosts = [];
  postsLoading;
  currentPost;
  pageSize = 10;

  constructor(private _postsService: PostsService) { }

  ngOnInit() {
    this.loadPosts(); 
  }

  private loadPosts(post_id?){
    this.postsLoading = true; 
    //post_id post_id?
    this._postsService.getPosts(post_id)
    .subscribe(
            posts => {
                this.posts = posts;
                this.pagedPosts = _.take(this.posts, this.pageSize);
            },
            null,
            () => { this.postsLoading = false; });
  }

  reloadPosts(filter){
    this.currentPost = null;
    
    this.loadPosts(filter);
  }

  select(post){
  this.currentPost = post; 
  } 

  onPageChanged(page) {
      var startIndex = (page - 1) * this.pageSize;
      this.pagedPosts = _.take(_.rest(this.posts, startIndex), this.pageSize);
  }
}
