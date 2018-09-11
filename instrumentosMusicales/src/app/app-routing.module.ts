import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuariosCreateComponent } from './usuarios/usuarios-create/usuarios-create.component';
import { PedidosListComponent } from './pedidos/pedidos-list/pedidos-list.component';
import { PedidosCreateComponent } from './pedidos/pedidos-create/pedidos-create.component';
import { AuthGuard } from '../auth/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'usuarios-create', component: UsuariosCreateComponent, canActivate: [ AuthGuard ], data: { roles: ["ADMIN"] } },
  { path: 'pedidos-list', component: PedidosListComponent },
  { path: 'pedidos-create', component: PedidosCreateComponent },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
