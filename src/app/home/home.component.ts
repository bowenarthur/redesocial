import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name

  constructor(private router: Router) { 
    this.name = localStorage.getItem('name')
  }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['auth'])
  }

}
