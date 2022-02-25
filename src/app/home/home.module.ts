import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from './home.service';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PostsComponent } from './posts/posts.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { CreatePostService } from './create-post/create-post.service';

@NgModule({
  declarations: [HomeComponent, PostsComponent, CreatePostComponent],
  imports: [CommonModule, HomeRoutingModule, ReactiveFormsModule],
  providers: [HomeService, CreatePostService],
})
export class HomeModule {}
