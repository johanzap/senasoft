import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule }  from './app-routing.module';
import { routes } from '../routes/routes';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { LoginModule } from './login/login.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsuariosModule,
    AppRoutingModule,
    LoginModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
