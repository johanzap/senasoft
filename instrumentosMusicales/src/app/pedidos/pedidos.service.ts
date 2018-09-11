import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../app.constans';

const options = {
  headers: new HttpHeaders({'Content-type': 'application/json'}),
  'observe': 'response' as 'body'
}

@Injectable()
export class PedidosService {

  private resourceUrl = SERVER_API_URL + 'pedidos';

  constructor(
    private http: HttpClient
  ) {}

  getPedidos() {
    return this.http.get(this.resourceUrl, options);
  }

}
