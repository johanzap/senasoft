import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import {  HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,
              private authService: AuthService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    this.authService.doLogin(this.loginForm.value)
      .subscribe((response: HttpResponse<{ [key: string]: any }>) => {
        console.log(response);
      }, (response: HttpErrorResponse) => {
        console.error(response);
      })
  }

}
