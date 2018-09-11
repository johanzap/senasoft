import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosCreateComponent } from './usuarios-create/usuarios-create.component';
import { UsuariosService } from './usuarios.service';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [UsuariosCreateComponent],
  providers: [UsuariosService]
})
export class UsuariosModule { }
