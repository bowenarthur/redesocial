import { Subscription } from 'rxjs';
import { Post } from './../models/post';
import { HomeService } from './home.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  page: number = 1;
  limit: number = 5;
  maxPage: number = 5;
  posts!: Post[];
  sub!: Subscription;
  show = true;

  constructor(private homeService: HomeService, public router: Router) {}

  ngOnInit(): void {
    this.sub = this.homeService.getPosts(this.page, this.limit, this.router.routerState.snapshot.url=='/my-posts').subscribe((res) => {
      this.page = res.curPage;
      this.maxPage = res.maxPage;
      this.posts = res.posts;
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe()
  }

  updatePosts(){
    if(++this.page <= this.maxPage){
      this.sub = this.homeService.getPosts(this.page, this.limit, this.router.routerState.snapshot.url=='/my-posts').subscribe((res) => {
        this.page = res.curPage;
        this.maxPage = res.maxPage;
        res.posts.map(post=>this.posts.push(post))
      });
    }
  }
}
