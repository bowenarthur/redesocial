import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  userAuthenticated(){return false}

  login(email: string, password: string){
    return this.http.post("http://localhost:3000/auth", { email: email, password: password})
  }

  signup(user: User){
    return this.http.post("http://localhost:3000/auth/signup", user)
  }
}
