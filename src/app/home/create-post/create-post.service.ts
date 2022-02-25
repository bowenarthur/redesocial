import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {

  constructor(private http: HttpClient) { }

  private getToken(){
    return localStorage.getItem('token')
  }

  createPost(content: string, imageUrl?: string){
    const header = new HttpHeaders({'Authorization': `Bearer ${this.getToken()}`})
    let body = {
      content: content,
      imageUrl: ''
    }
    imageUrl ? body.imageUrl = imageUrl : null
    const options = {
      headers: header
    }
    return this.http.post('http://localhost:3000',body, options)
  }
}
