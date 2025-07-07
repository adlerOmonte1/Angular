import { Component } from '@angular/core';
import { Historia } from '../../models/historia.model';
import { Administrador } from '../../models/administrador.model';
import { apiService } from '../../service/api.service';
import { AdministradorService } from '../../service/administrador.service';

@Component({
  selector: 'app-historia',
  standalone: false,
  templateUrl: './historias.component.html',
  styleUrls: ['./historias.component.css'],
  providers: [apiService, AdministradorService]
})
export class HistoriaComponent {

  historias: Historia[];
  visible = false;
  nuevaHistoria = true;
  historiaDialogo = new Historia();

  imagenSeleccionada: File | null = null;

  administradores: Administrador[];
  administradorSeleccionado: Administrador | undefined;

  constructor(
    private historiaService: apiService,
    private administradorService: AdministradorService
  ) {
    this.obtenerHistorias();
    this.obtenerAdministradores();
  }

  abrirDialogo() {
    this.visible = true;
    this.nuevaHistoria = true;
    this.historiaDialogo = new Historia();
    this.imagenSeleccionada = null;
    this.administradorSeleccionado = undefined;
  }

  obtenerHistorias() {
    this.historiaService.getHistorias().subscribe(res => {
      this.historias = res;
    });
  }

  obtenerAdministradores() {
    this.administradorService.getAdministrador().subscribe(res => {
      this.administradores = res;
    });
  }

  editarHistoria(historia: Historia) {
    this.visible = true;
    this.nuevaHistoria = false;
    this.historiaDialogo = { ...historia };
    this.administradorSeleccionado = this.administradores.find(a => a.id === historia.administrador.id);
    this.imagenSeleccionada = null;
  }

  eliminarHistoria(historia: Historia) {
    this.historiaService.deleteHistoria(historia.id).subscribe(() => {
      this.obtenerHistorias();
    });
  }

  guardarHistoria() {
    if (!this.administradorSeleccionado) {
      alert('Debes seleccionar un administrador');
      return;
    }

    const formData = new FormData();
    formData.append('nombreHistoria', this.historiaDialogo.nombreHistoria || '');
    formData.append('descripcion', this.historiaDialogo.descripcion || '');
    formData.append('administrador_id', this.administradorSeleccionado.id.toString());

    if (this.imagenSeleccionada) {
      formData.append('imagen', this.imagenSeleccionada);
    }

    if (this.nuevaHistoria) {
      this.historiaService.postHistoriaConImagen(formData).subscribe(() => {
        this.obtenerHistorias();
        this.visible = false;
      });
    } else {
      this.historiaService.putHistoriaConImagen(this.historiaDialogo.id, formData).subscribe(() => {
        this.obtenerHistorias();
        this.visible = false;
      });
    }
  }

  onBasicUploadAuto(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.imagenSeleccionada = input.files[0];
    }
  }
}
