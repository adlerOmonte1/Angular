import { CarritoProducto } from "./carritoproducto";

export class Carrito {
  id: number;
  usuarioId: number;
  productos: CarritoProducto[];
  fecha_creacion: Date;
  total: number;

}
