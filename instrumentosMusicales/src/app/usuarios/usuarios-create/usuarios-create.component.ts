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
    this.buildForm();
    this.usuariosService.getUsuarios().subscribe(
      (res) => {
        console.log('users', res);
      }
    )
  }

  buildForm() {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      identidad: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required]
    }, {
      validator: this.myCustomValidators()
    });

    this.form.get('confirm_password').valueChanges
    .subscribe((val) => {
      console.log(this.form);
    })
  }

  myCustomValidators() {
    return (group: FormGroup): { [key: string]: any } => {
      if (group.controls.password.value.length > 0 && group.controls.confirm_password.value.length > 0
          && group.controls.password.value !== group.controls.confirm_password.value) {
            return {
              paswordNotEquals: true
            }
          }
    }
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
