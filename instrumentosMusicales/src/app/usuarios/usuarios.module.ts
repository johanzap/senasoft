import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosCreateComponent } from './usuarios-create/usuarios-create.component';
import { UsuariosService } from './usuarios.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UsuariosCreateComponent],
  providers: [UsuariosService]
})
export class UsuariosModule { }
