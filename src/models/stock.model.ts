import { Almacen } from "./almacen.model";
import { Producto } from "./producto.model";
import { UnidadMedida } from "./unidadmedida";

export class Stock {
    id:number;
    almacen:Almacen;
    producto:Producto;
    unidadMedida:UnidadMedida;
    cantidad:number;
    fecha:Date;
}