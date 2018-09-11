import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuariosCreateComponent } from './usuarios/usuarios-create/usuarios-create.component';
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'usuarios-create', component: UsuariosCreateComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
