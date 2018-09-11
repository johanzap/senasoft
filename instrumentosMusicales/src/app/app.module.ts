import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule }  from './app-routing.module';
import { routes } from '../routes/routes';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { ProductosModule } from './productos/productos.module';
import { MarcasModule } from './marcas/marcas.module';
import { TipoProductoModule } from './tipo-producto/tipo-producto.module';
import { PagosModule } from './pagos/pagos.module';
import { AgenciaPaqueteriaModule } from './agencia-paqueteria/agencia-paqueteria.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsuariosModule,
    AppRoutingModule,
    HttpClientModule,
    PedidosModule,
    ProductosModule,
    MarcasModule,
    TipoProductoModule,
    PagosModule,
    AgenciaPaqueteriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
