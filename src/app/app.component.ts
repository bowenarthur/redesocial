import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'redesocial';
  name;

  constructor(public router: Router) {
    this.name = localStorage.getItem('name');
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['auth']);
  }
}
