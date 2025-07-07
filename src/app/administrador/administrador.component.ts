import { Component } from '@angular/core';
import { Administrador } from '../../models/administrador.model';
import { Usuario } from '../../models/usuario.model';
import { tiposadmin } from '../../models/tipo-administrador.model';
import { AdministradorService } from '../../service/administrador.service';
import { UsuarioService } from '../../service/usuario.service';
import { TipoAdminService } from '../../service/tiposadmin.service';

@Component({
  selector: 'app-administrador',
  standalone: false,
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css'],
  providers: [AdministradorService, UsuarioService, TipoAdminService]
})
export class AdministradorComponent {
  administradores: Administrador[];
  visible: boolean = false;
  crear: boolean = true;
  administradorDialogo: Administrador = new Administrador();

  usuarios: Usuario[];
  usuariosSeleccionado: Usuario;
  tiposadmin: tiposadmin[];
  tiposadminSeleccionado: tiposadmin;

  constructor(
    private administradorService: AdministradorService,
    private usuarioService: UsuarioService,
    private tipoAdminService: TipoAdminService
  ) {}

  ngOnInit() {
    this.obtenerAdministradores();
    this.obtenerUsuarios();
    this.obtenerTiposAdmin();
  }

  obtenerAdministradores() {
    this.administradorService.getAdministrador().subscribe(res => {
      this.administradores = res;
    });
  }

  obtenerUsuarios() {
    this.usuarioService.getUsuario().subscribe(res => {
      this.usuarios = res;
    });
  }

  obtenerTiposAdmin() {
    this.tipoAdminService.getTiposAdmin().subscribe(res => {
      this.tiposadmin = res;
    });
  }

  abrirModal() {
    this.visible = true;
    this.crear = true;
    this.administradorDialogo = new Administrador();
  }

  editarAdministrador(admin: Administrador) {
    this.visible = true;
    this.crear = false;
    this.administradorDialogo = admin;
    this.usuariosSeleccionado = this.usuarios.find(u => u.id === admin.usuario)!;
    this.tiposadminSeleccionado = this.tiposadmin.find(t => t.id === admin.tipo_admin)!;
  }

  eliminarAdministrador(admin: Administrador) {
    this.administradorService.deleteAdministrador(admin.id.toString()).subscribe(() => {
      this.obtenerAdministradores();
    });
  }

guardarAdministrador() {
  this.administradorDialogo.id = this.usuariosSeleccionado.id;
  this.administradorDialogo.tipo_admin = this.tiposadminSeleccionado.id;

  if (this.crear) {
    this.administradorService.postAdministrador(this.administradorDialogo).subscribe(() => {
      this.obtenerAdministradores();
      this.visible = false;
    });
  } else {
    this.administradorService.putAdministrador(this.administradorDialogo).subscribe(() => {
      this.obtenerAdministradores();
      this.visible = false;
    });
  }
}

}
