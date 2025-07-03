import { Component } from '@angular/core';
import { TipoAdminService } from '../../service/tiposadmin.service';
import { tiposadmin } from '../../models/tipo-administrador.model';

@Component({
  selector: 'app-tiposadmin',
  standalone: false,
  templateUrl: './tiposadmin.component.html',
  styleUrl: './tiposadmin.component.css',
  providers: [TipoAdminService]
})
export class TiposadminComponent {

  constructor(private api: TipoAdminService) {}

  tiposadmin: tiposadmin[] = [];
  tituloDialogo: string = 'Nuevo Tipo de Administrador';
  visible: boolean = false;

  tiposadminDialogo: tiposadmin = new tiposadmin();
  nuevaTiposadmin: boolean = true;

  obtenerTiposadmin() {
    this.api.getTiposAdmin().subscribe((res) => {
      this.tiposadmin = res;
    });
  }

  ngOnInit() {
    this.obtenerTiposadmin();
  }

  editarTiposadmin(tiposadmin: tiposadmin) {
    this.visible = true;
    this.nuevaTiposadmin = false;
    this.tiposadminDialogo = tiposadmin;
  }

  eliminarTiposadmin(tiposadmin: tiposadmin) {
    this.api.deleteTiposAdmin(tiposadmin.id.toString()).subscribe(() => {
      this.obtenerTiposadmin();
    });
  }

  abrirDialogo() {
    this.visible = true;
    this.nuevaTiposadmin = true;
    this.tiposadminDialogo = new tiposadmin();
  }

  guardarTiposadmin() {
    if (this.nuevaTiposadmin) {
      this.api.postTiposAdmin(this.tiposadminDialogo).subscribe(res => {
        this.obtenerTiposadmin();
      });
    } else {
      this.api.putTiposAdmin(this.tiposadminDialogo).subscribe(res => {
        this.obtenerTiposadmin();
      });
    }
    this.visible = false;
  }
}
