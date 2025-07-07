export class Usuario {
  id: number;
  username: string;
  email: string;
  first_name?: string;
  last_name?: string;
  telefono?: string;
  dni?: string;
  password:string;
  rol:string;
  fechaNac?: Date | string; // usar formato yyyy-mm-dd como string
}

