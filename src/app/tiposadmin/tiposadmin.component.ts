import { Component, OnInit } from '@angular/core';
import { TipoAdminService } from '../../service/tiposadmin.service'; // Cambié el nombre del servicio
import { tiposadmin } from '../../models/tipo-administrador.model'; // Cambié el nombre del modelo

@Component({
  selector: 'app-tipo-admin',
  standalone: false,
  templateUrl: './tiposadmin.component.html',
  styleUrls: ['./tiposadmin.component.css'],
  providers: [TipoAdminService]  // Cambié el nombre del servicio
})
export class TipoAdminComponent implements OnInit {  // Cambié el nombre del componente

  tiposAdmin: tiposadmin[] = [];  // Cambié el nombre de la lista
  tituloDialogo: string = 'Nuevo Tipo Admin';  // Título del diálogo
  visible: boolean = false;
  tipoAdminDialogo: tiposadmin = new tiposadmin();  // Cambié la variable
  nuevoTipoAdmin: boolean = true;  // Flag para saber si estamos creando o editando

  constructor(private api: TipoAdminService) {}  // Cambié el nombre del servicio

  ngOnInit() {
    this.obtenerTiposAdmin();  // Cambié el nombre del método
  }

  obtenerTiposAdmin() {
    this.api.getTipoAdmin().subscribe((res) => {  // Cambié el nombre del método
      this.tiposAdmin = res;  // Asignamos la lista de tiposAdmin
    });
  }

  editarTipoAdmin(tipoAdmin: tiposadmin) {  // Cambié el nombre del método y parámetro
    this.visible = true;
    this.nuevoTipoAdmin = false;
    this.tipoAdminDialogo = tipoAdmin;
  }

  eliminarTipoAdmin(tipoAdmin: tiposadmin) {  // Cambié el nombre del método y parámetro
    this.api.deleteTipoAdmin(tipoAdmin.id.toString()).subscribe(() => {  // Cambié el nombre del método
      this.obtenerTiposAdmin();  // Refresca la lista de tiposAdmin
    });
  }

  abrirDialogo() {
    this.visible = true;
    this.nuevoTipoAdmin = true;
    this.tipoAdminDialogo = new tiposadmin();  // Reinicia el objeto del diálogo
  }

  guardarTipoAdmin() {  // Cambié el nombre del método
    if (this.nuevoTipoAdmin) {
      this.api.postTipoAdmin(this.tipoAdminDialogo).subscribe(() => {  // Cambié el nombre del método
        this.obtenerTiposAdmin();
      });
    } else {
      this.api.putTipoAdmin(this.tipoAdminDialogo).subscribe(() => {  // Cambié el nombre del método
        this.obtenerTiposAdmin();
      });
    }
    this.visible = false;
  }
}

