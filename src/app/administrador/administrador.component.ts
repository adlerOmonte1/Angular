import { Component } from '@angular/core';
import { administrador } from '../../models/administrador.model';
import { tiposadmin } from '../../models/tipo-administrador.model';
import { AdministradorService } from '../../service/administrador.service';
import { TipoAdminService } from '../../service/tiposadmin.service';

@Component({
  selector: 'app-administrador',
  standalone: false,
  templateUrl: './administrador.component.html',
  styleUrl: './administrador.component.css',
  providers: [AdministradorService, TipoAdminService]
})
export class AdministradorComponent {
  constructor(
    private administradorService: AdministradorService,
    private tipoAdminService: TipoAdminService
  ) {}

  administradores: administrador[] = [];
  tiposadmin: tiposadmin[] = [];
  visible: boolean = false;
  nuevoAdministrador: boolean = true;
  administradorDialogo: administrador = new administrador();

  tipoSeleccionado: number;

  ngOnInit() {
    this.obtenerAdministradores();
    this.obtenerTiposAdmin();
  }

  obtenerAdministradores() {
    this.administradorService.getAdministradores().subscribe(res => {
      this.administradores = res;
    });
  }

  obtenerTiposAdmin() {
    this.tipoAdminService.getTipos().subscribe(res => {
      this.tiposadmin = res;
    });
  }

  abrirDialogo() {
    this.visible = true;
    this.nuevoAdministrador = true;
    this.administradorDialogo = new administrador();
  }

  editarAdministrador(adm: administrador) {
    this.visible = true;
    this.nuevoAdministrador = false;
    this.administradorDialogo = adm;
    this.tipoSeleccionado = adm.tipo_admin;
  }

  eliminarAdministrador(adm: administrador) {
    this.administradorService.deleteAdministrador(adm.id).subscribe(() => {
      this.obtenerAdministradores();
    });
  }

  guardarAdministrador() {
    this.administradorDialogo.tipo_admin = this.tipoSeleccionado;

    if (this.nuevoAdministrador) {
      this.administradorService.postAdministrador(this.administradorDialogo).subscribe(() => {
        this.obtenerAdministradores();
      });
    } else {
      this.administradorService.putAdministrador(this.administradorDialogo).subscribe(() => {
        this.obtenerAdministradores();
      });
    }

    this.visible = false;
  }

  getNombreTipo(idTipo: number): string {  //Devuelve un string (el nombre del tipo de administrador).
    const tipo = this.tiposadmin.find(t => t.id === idTipo); //Usa find para encontrar el objeto cuyo id coincida con idTipo.
    return tipo ? tipo.tipo : 'Sin asignar'; //Si encontró un tipo, retorna su propiedad tipo (es decir, el nombre del tipo).
  }
}