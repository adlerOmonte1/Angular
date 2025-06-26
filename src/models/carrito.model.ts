import { Producto } from "./producto.model";
import { Usuario } from "./usuario.model";

export class Carrito {
  id: number;
  usuario: Usuario [];
  producto: Producto [];
  fecha_creacion: Date;
  total: number;
}
