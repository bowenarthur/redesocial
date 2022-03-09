import { Router } from '@angular/router';
import { Res } from './res';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string){
    return this.http.post<Res>(`${environment.apiUrl}/auth`, { email: email, password: password})
  }

  signup(user: User){
    return this.http.post(`${environment.apiUrl}/auth/signup`, user)
  }

  verifyToken(){
    const options = {
      headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})
    }
    return this.http.post(`${environment.apiUrl}/auth/verify`, {}, options)
    .subscribe({
      next: () => true,
      error: () => {
        this.router.navigate(['auth'])
        return false
      }
    })
  }
}
