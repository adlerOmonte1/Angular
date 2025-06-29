import { administrador } from "./administrador.model";

export class Jugador {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  posicion: string;
  dorsal: number;
  peso: number;
  altura: number;
  nacionalidad: string;
  administrador: administrador;  
}