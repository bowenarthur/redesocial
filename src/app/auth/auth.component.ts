import { User } from './../models/user';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  form: FormGroup;
  isSignup = false;
  user?: User;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]],
      name: [''],
    });
  }

  ngOnInit(): void {}

  verifyValidTouched(campo: string) {
    return (
      !this.form.controls[campo].valid && this.form.controls[campo].touched
    );
  }

  onSubmit() {
    if (this.form.valid && this.form.touched) {
      if (this.isSignup) {
        this.user = {
          name: this.form.controls['name'].value,
          email: this.form.controls['email'].value,
          password: this.form.controls['password'].value,
        };
        this.authService.signup(this.user).subscribe();
      } else {
        this.authService
          .login(
            this.form.controls['email'].value,
            this.form.controls['password'].value
          )
          .subscribe((res) => {
            localStorage.setItem('token', res.token);
            localStorage.setItem('name', res.name);
            this.router.navigate(['']);
          });
      }
    }
  }

  changeSignup() {
    this.form.reset();
    this.isSignup = !this.isSignup;
  }
}
