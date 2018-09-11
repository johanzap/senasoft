import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../usuarios.service';


@Component({
  selector: 'app-usuarios-create',
  templateUrl: './usuarios-create.component.html',
  styleUrls: ['./usuarios-create.component.css']
})
export class UsuariosCreateComponent implements OnInit {
  identidad: any;
  telefono: any;
  password: any;
  nombre: any;
  email: any;

  constructor(
    private usuariosService: UsuariosService
  ) { }

  ngOnInit() {
    this.usuariosService.getUsuarios().subscribe(
      (res) => {
        console.log('users', res);
      }
    )
  }

  crearUsuario() {
    const user = {
      nombre: this.nombre,
      email: this.email,
      identidad: this.identidad,
      telefono: this.telefono,
      password: this.password
    };

    this.usuariosService.crearUsuario(user).subscribe(
      res => {
        console.log('creaddddddo');
      }
    );

  }

}
