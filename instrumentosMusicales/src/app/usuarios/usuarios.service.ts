import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {SERVER_API_URL} from '../app.constans';
import { map } from 'rxjs/operators';
const options = {
  headers: new HttpHeaders({'Content-type': 'application/json'}),
  'observe': 'response' as 'body'
}

@Injectable()
export class UsuariosService {

    private resourceUrl = SERVER_API_URL + 'usuarios';

    constructor(private http: HttpClient) {
    }

    getUsuarios() {
      return this.http.get(this.resourceUrl, options);
    }

    crearUsuario(usuario: { [key: string]: any }): Observable<HttpResponse<{ [key: string]: any }>> {
      return this.http.post(this.resourceUrl, usuario, options)
        .pipe(
          map((response: HttpResponse<{ [key: string]: any }>) => { return response; })
        )
    }

}
