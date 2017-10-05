import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { PostsModule } from './posts/posts.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PostsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
