import { administrador } from "./administrador.model";

export class Historia {
  id: number;
  nombreHistoria: string;
  descripcion: string;
  administrador: administrador;
  imagen: string;
}
