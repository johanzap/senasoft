import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-usuarios-create',
  templateUrl: './usuarios-create.component.html',
  styleUrls: ['./usuarios-create.component.css']
})
export class UsuariosCreateComponent implements OnInit {
  form: FormGroup;
  constructor(
    private usuariosService: UsuariosService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.usuariosService.getUsuarios().subscribe(
      (res) => {
        console.log('users', res);
      }
    )
  }

  buildForm() {
    this.form = this.fb.group({
      email: ['']
    })
  }

  crearUsuario(usuario: { [key: string]: any }) {
    this.usuariosService.crearUsuario(usuario)
      .subscribe((response: HttpResponse<{ [key: string]: any }>) => {
        console.log(response);
      }, (response: HttpErrorResponse) => {
        console.error(response);
      })
  }

}
