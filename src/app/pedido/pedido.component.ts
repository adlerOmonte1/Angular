import { Component } from '@angular/core';
import { PedidoService } from '../../service/pedido.service';
import { Pedido } from '../../models/pedido.model';
import { Carrito } from '../../models/carrito.model';
import { CarritoService } from '../../service/carrito.service';

@Component({
  selector: 'app-pedido',
  standalone: false,
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css',
  providers: [PedidoService, CarritoService]
})
export class PedidoComponent {

  constructor(private api:PedidoService, private apiCarrito:CarritoService) {}

  pedidos:Pedido[];

  carritoa:Carrito[];
  tipoSeleccionado:Carrito;

  obtenerPedidos(){
    this.api.getPedido().subscribe(res => {
      this.pedidos = res;
    });
  }

  obtenerCarrito(){
    this.apiCarrito.getCarrito().subscribe(res => {
      this.carritoa = res;
    });
  }

  ngOnInit(){
    this.obtenerPedidos();
    this.obtenerCarrito();
  }
}
