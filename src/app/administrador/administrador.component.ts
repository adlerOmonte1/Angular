import { Component } from '@angular/core';
import { AdministradorService } from '../../service/administrador.service';
import { administrador } from '../../models/administrador.model';
import { Usuario } from '../../models/usuario.model';
import { tiposadmin } from '../../models/tipo-administrador.model';
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
  administradores: administrador[] = [];
  administradorDialogo: administrador = new administrador();
  visible: boolean = false;
  crear: boolean = true;

  usuarios: Usuario[] = [];
  tiposadmin: tiposadmin[] = [];

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
    this.administradorDialogo = new administrador();
  }

  editarAdministrador(admin: administrador) {
    this.visible = true;
    this.crear = false;
    this.administradorDialogo = { ...admin };
  }

  eliminarAdministrador(admin: administrador) {
    this.administradorService.deleteAdministrador(admin.id.toString()).subscribe(() => {
      this.obtenerAdministradores();
    });
  }

  guardar() {
    const body = {
      id: this.administradorDialogo.id,
      tipo_admin: this.administradorDialogo.tipo_admin
    };

    if (this.crear) {
      this.administradorService.postAdministrador(body).subscribe(() => {
        this.obtenerAdministradores();
        this.visible = false;
      });
    } else {
      this.administradorService.putAdministrador(body, this.administradorDialogo.id).subscribe(() => {
      this.obtenerAdministradores();
      this.visible = false;
      });
    }
  }
}
