import { HomeService } from './../home.service';
import { Post } from './../../models/post';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  @Input() post!: Post
  date!: string

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.date = this.getFormattedDate(new Date(this.post.createdAt))
  }

  getFormattedDate(date: Date) {
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    const month =
      date.getMonth() + 1 < 10
        ? '0' + (date.getMonth() + 1)
        : date.getMonth() + 1;
    return day + '/' + month + '/' + date.getFullYear();
  }

  getName(){
    return localStorage.getItem('name')
  }

  deletePost(){
    if(confirm("Você tem certeza que quer excluir esse post?")){
      this.homeService.deletePost(this.post._id)
      location.reload()
    }
  }
}
