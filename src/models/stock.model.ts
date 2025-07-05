import { Almacen } from "./almacen.model";
import { Producto } from "./producto.model";
import { UnidadMedida } from "./unidadmedida";

export class Stock {
    id:number;
    almacen:number;
    producto:number;
    unidadMedida:number;
    cantidad:number;
    fecha:Date;
}
