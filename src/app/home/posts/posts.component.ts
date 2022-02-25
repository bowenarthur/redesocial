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

  constructor() {
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
}
