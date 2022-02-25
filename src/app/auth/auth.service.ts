import { Router } from '@angular/router';
import { Res } from './res';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string){
    return this.http.post<Res>("http://localhost:3000/auth", { email: email, password: password})
  }

  signup(user: User){
    return this.http.post("http://localhost:3000/auth/signup", user)
  }

  verifyToken(){
    const options = {
      headers: new HttpHeaders({Authorization: `Bearer ${localStorage.getItem('token')}`})
    }
    return this.http.post("http://localhost:3000/auth/verify", {}, options)
    .subscribe({
      next: () => true,
      error: () => {
        this.router.navigate(['auth'])
        return false
      }
    })
  }
}
