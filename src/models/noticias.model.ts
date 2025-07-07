import { administrador } from "./administrador.model";
export class Noticia {
  id: number;
  nombreHistoria: string;
  descripcion: string;
  imagen: string;
  fecha_publicacion: string;
  administrador: administrador;
}
