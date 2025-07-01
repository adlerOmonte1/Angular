import { administrador } from "./administrador.model";

export class jugador {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  posicion: string;
  dorsal: number;
  peso: number;
  altura: number;
  nacionalidad: string;
  imagen: string;
  administrador: administrador; // ID del administrador
}
