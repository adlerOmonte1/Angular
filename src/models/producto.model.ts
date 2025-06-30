import { Almacen } from "./almacen.model";
import { Categoria } from "./categoria.model";
import { promocion } from "./promocion.model";
import { Proveedores } from "./proveedores.models";
import { UnidadMedida } from "./unidadmedida";
import { Usuario } from "./usuario.model";

export class Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen_url: string;
  usuario: Usuario;
  categoria: Categoria;
  almacen: Almacen;
  proveedor: Proveedores;
  promocion: promocion;
  precio_final: number;
  unidadSeleccionada: UnidadMedida;
  cantidadSeleccionada: number;

}
