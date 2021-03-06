import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetResponse } from './../models/getResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  private getToken() {
    return localStorage.getItem('token');
  }

  getPosts(page: number, limit: number, user: boolean, search?: string) {
    const params = new HttpParams()
    .set('page', page)
    .set('limit', limit)
    .set('user', user)
    search ? params.set('search', search) : null;
    const header = new HttpHeaders({
      Authorization: `Bearer ${this.getToken()}`,
    });
    const options = {
      params: params,
      headers: header,
    };
    return this.http.get<GetResponse>(`${environment.apiUrl}`, options);
  }

  deletePost(id: string){
    const header = new HttpHeaders({
      Authorization: `Bearer ${this.getToken()}`,
    });
    const options = {
      headers: header
    };
    return this.http.delete(`${environment.apiUrl}/${id}`, options).subscribe();
  }
}
