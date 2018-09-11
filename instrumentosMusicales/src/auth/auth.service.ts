import { Injectable } from '@angular/core';
import { SERVER_API_URL } from '../app/app.constans';
import { HttpHeaders, HttpResponse, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelper } from 'angular2-jwt';
const options = {
  'headers': new HttpHeaders({'Content-type': 'application/json'}),
  'observe': 'response' as 'body'
}
@Injectable()
export class AuthService {

  constructor(private http: HttpClient,
              private jwtHelper: JwtHelper = new JwtHelper()) { }

  doLogin(usuario): Observable<HttpResponse<{ [key: string]: any }>> {
    return this.http.post(SERVER_API_URL + 'auth/login', usuario, options)
    .pipe(
      map((response: HttpResponse<{ [key: string]: any }>) => {
        localStorage.setItem('instrumentos.token', response.body.token);
        console.log(this.getDecodeToken());
        return response;
      })
    )
  }

  logOut(): Observable<string> {
    return new Observable((observe) => {
      localStorage.removeItem('instrumentos.token');
      if (localStorage.getItem('instrumentos.token')) {
        return observe.error("No se ha podido ejecutar el logout");
      } else {
        return observe.next("Se ha ejecutado correctamente el logout");
      }
    });
  }

  hasAnyRole(roles: string[]): boolean {
    let hasAnyRole = false;
    if (!this.jwtHelper.isTokenExpired(localStorage.getItem('instrumentos.token'))) {
      roles.forEach((e: string) => {
        if (this.getDecodeToken().roles.indexOf(e)) {
          hasAnyRole = true;
        }
      })
    }
    return hasAnyRole;
  }

  getDecodeToken(): { [key: string ]: any} {
    return this.jwtHelper.decodeToken(localStorage.getItem('instrumentos.token'));
  }


}
