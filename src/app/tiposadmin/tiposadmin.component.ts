import { Component, OnInit } from '@angular/core';
import { TipoAdminService } from '../../service/tiposadmin.service';
import { tiposadmin } from '../../models/tipo-administrador.model';

@Component({
  selector: 'app-tipo-admin',
  standalone: false,
  templateUrl: './tiposadmin.component.html',
  styleUrls: ['./tiposadmin.component.css'],
  providers: [TipoAdminService]
})
export class TipoAdminComponent{

  tiposAdmin: tiposadmin[] = [];
  tituloDialogo: string = 'Nuevo Tipo Admin';
  visible: boolean = false;
  tipoAdminDialogo: tiposadmin = new tiposadmin();
  nuevoTipoAdmin: boolean = true;

  constructor(private api: TipoAdminService) {}

  ngOnInit() {
    this.obtenerTiposAdmin();
  }

  obtenerTiposAdmin() {
    this.api.getTipos().subscribe((res) => {
      this.tiposAdmin = res;
    });
  }

  editarTipoAdmin(tipoAdmin: tiposadmin) {
    this.visible = true;
    this.nuevoTipoAdmin = false;
    this.tipoAdminDialogo = tipoAdmin;
  }

  eliminarTipoAdmin(tipoAdmin: tiposadmin) {
    this.api.deleteTipo(tipoAdmin.id!.toString()).subscribe(() => {
      this.obtenerTiposAdmin();
    });
  }

  abrirDialogo() {
    this.visible = true;
    this.nuevoTipoAdmin = true;
    this.tipoAdminDialogo = new tiposadmin();
  }

  guardarTipoAdmin() {
    if (this.nuevoTipoAdmin) {
      this.api.postTipo(this.tipoAdminDialogo).subscribe(() => {
        this.obtenerTiposAdmin();
      });
    } else {
      this.api.putTipo(this.tipoAdminDialogo).subscribe(() => {
        this.obtenerTiposAdmin();
      });
    }
    this.visible = false;
  }
}
