import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }   from '@angular/http';

import { PostsComponent } from './posts.component';
import { PostsService }   from './posts.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ PostsComponent ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule
  ],
  providers: [ PostsService],
  exports: [ PostsComponent]
  
})
export class PostsModule { }
