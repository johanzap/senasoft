import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosListComponent } from './pedidos-list/pedidos-list.component';
import { PedidosService } from './pedidos.service';
import { PedidosCreateComponent } from './pedidos-create/pedidos-create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PedidosListComponent, PedidosCreateComponent],
  providers: [PedidosService]
})
export class PedidosModule { }
