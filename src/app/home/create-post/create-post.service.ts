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

  createPost(body: Object){
    const header = new HttpHeaders({'Authorization': `Bearer ${this.getToken()}`})
    const options = {
      headers: header
    }
    return this.http.post('http://localhost:3000',body, options)
  }

  uploadImage(body: FormData){
    const header = new HttpHeaders({'Authorization': `Bearer ${this.getToken()}`})
    const options = {
      headers: header
    }
    return this.http.post('http://localhost:3000/fileupload',body)
  }
}
