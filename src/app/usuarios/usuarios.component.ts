import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { apiService } from '../../service/api.service';

@Component({
  selector: 'app-usuarios',
  standalone: false,
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [apiService]
})
export class UsuarioComponent {
  usuarios: Usuario[] = [];
  usuario: Usuario = new Usuario();
  visible: boolean = false;
  crearUsuario: boolean = true;
  tituloDialogo: string = "Registrar Usuario";

  constructor(private apiService: apiService) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.apiService.getUsuarios().subscribe(res => {
      this.usuarios = res;
    });
  }

  abrirModal(): void {
    this.visible = true;
    this.crearUsuario = true;
    this.usuario = new Usuario();
    this.tituloDialogo = "Registrar Usuario";
  }

  editarUsuario(usuario: Usuario): void {
    this.visible = true;
    this.crearUsuario = false;
    this.tituloDialogo = "Editar Usuario";
    this.usuario = usuario;
  }

  eliminarUsuario(usuario: Usuario): void {
    this.apiService.deleteUsuario(usuario.id).subscribe(() => {
      this.obtenerUsuarios();
    });
  }

  guardar(): void {
    if (this.crearUsuario) {
      this.apiService.postUsuario(this.usuario).subscribe(() => {
        this.obtenerUsuarios();
      });
    } else {
      this.apiService.putUsuario(this.usuario).subscribe(() => {
        this.obtenerUsuarios();
      });
    }
    this.visible = false;
  }
}
