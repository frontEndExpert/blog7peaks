import { Injectable } from '@angular/core';
import { Http } 	  from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
  private _url = "http://jsonplaceholder.typicode.com/posts";
  
  constructor(private _http: Http) {
  }
  //post_id?
    getPosts(post_id?) {
      var url = this._url;
         
      if (post_id){
        url += "/" + post_id;
      };
      
      return this._http.get(url)
        .map(res => res.json());
    }
      
  }