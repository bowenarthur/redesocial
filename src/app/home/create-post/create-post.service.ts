import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

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
    return this.http.post(`${environment.apiUrl}`,body, options)
  }

  uploadImage(body: FormData){
    const header = new HttpHeaders({'Authorization': `Bearer ${this.getToken()}`})
    const options = {
      headers: header
    }
    return this.http.post(`${environment.apiUrl}/fileupload`,body)
  }
}
