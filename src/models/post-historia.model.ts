import { Historia } from "./historia.model";

export class PostHistoria {
  id: number;
  historia: Historia;
  titulo: string;
  contexto: string;
  imagen: string;
  fecha_publicacion: string;
}
