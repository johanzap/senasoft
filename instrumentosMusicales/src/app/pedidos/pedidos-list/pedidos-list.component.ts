import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../pedidos.service'

@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.css']
})
export class PedidosListComponent implements OnInit {

  constructor(
    private pedidosService: PedidosService
  ) { }

  ngOnInit() {
    this.getPedidos();
  }

  getPedidos() {
    this.pedidosService.getPedidos().subscribe(
      res => {
        console.log(res['body']);
      }
    )
  }

}
