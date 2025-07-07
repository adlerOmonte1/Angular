import { Administrador } from "./administrador.model";

export class Noticia {
  id: number;
  administrador: Administrador;            
  titulo: string;
  contenido: string;
  fecha_publicacion: string;        
  imagen: string;               
}
