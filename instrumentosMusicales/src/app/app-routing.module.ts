import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuariosCreateComponent } from './usuarios/usuarios-create/usuarios-create.component';
import { PedidosListComponent } from './pedidos/pedidos-list/pedidos-list.component';
import {  } from './pedidos/pedidos-list/pedidos-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'usuarios-create', component: UsuariosCreateComponent },
  { path: 'pedidos-list', component: PedidosListComponent },
  { path: 'pedidos-create', component: PedidosListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
