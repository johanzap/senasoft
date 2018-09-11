import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuariosCreateComponent } from './usuarios/usuarios-create/usuarios-create.component';
import { AuthGuard } from '../auth/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'usuarios-create', component: UsuariosCreateComponent, canActivate: [ AuthGuard ], data: { roles: ["ADMIN"] } },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
