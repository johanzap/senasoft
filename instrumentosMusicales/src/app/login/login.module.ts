import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { JwtHelper } from 'angular2-jwt';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ AuthService, JwtHelper ],
  declarations: [LoginComponent]
})
export class LoginModule { }
