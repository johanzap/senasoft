import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let rolesRoute: string[] = route.data.roles;
    if (rolesRoute.length < 1 ) {
      return true;
    } else {
      return this.authService.hasAnyRole(rolesRoute);
    }
  }


}
