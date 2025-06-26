import { Carrito } from "./carrito.model";

export class Pedido {
  id: number;
  carrito: Carrito [];
  fecha_pedido: Date;
}
