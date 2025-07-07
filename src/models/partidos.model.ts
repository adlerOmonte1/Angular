import { Administrador } from "./administrador.model";
export class Partido {
  id: number;
  administrador: Administrador;
  nombre_partido: string;
  lugar_partido: string;
  fecha_partido: string;
  hora_partido: string;
  resultado: string;
}
