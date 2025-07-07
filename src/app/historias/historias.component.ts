import { Component } from '@angular/core';
import { Historia } from '../../models/historia.model';
import { administrador } from '../../models/administrador.model';
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
  visible: boolean = false;
  nuevaHistoria: boolean = true;
  historiaDialogo: Historia = new Historia();

  imagenSeleccionada: File | null = null;

  administradores: administrador[];
  administradorSeleccionado: administrador;

  constructor(
    private historiaService: apiService,
    private administradorService: AdministradorService
  ) {}

  ngOnInit() {
    this.obtenerHistorias();
    this.obtenerAdministradores();
  }

  obtenerHistorias() {
    this.historiaService.getHistorias().subscribe(res => {
      this.historias = res;
    });
  }

  obtenerAdministradores() {
    this.administradorService.getAdministradores().subscribe(res => {
      this.administradores = res;
    });
  }

  abrirDialogo() {
    this.visible = true;
    this.nuevaHistoria = true;
    this.historiaDialogo = new Historia();
    this.imagenSeleccionada = null;
    this.administradorSeleccionado = {} as administrador;
  }

  editarHistoria(historia: Historia) {
    this.visible = true;
    this.nuevaHistoria = false;
    this.historiaDialogo = { ...historia };

    if (historia.administrador && typeof historia.administrador === 'object') {
      this.administradorSeleccionado = this.administradores.find(
        a => a.id === historia.administrador.id
      )!;
    }

    this.imagenSeleccionada = null;
  }

  eliminarHistoria(historia: Historia) {
    this.historiaService.deleteHistoria(historia.id).subscribe(() => {
      this.obtenerHistorias();
    });
  }

  guardarHistoria() {
    const formDataHistoria = new FormData();
    formDataHistoria.append('nombreHistoria', this.historiaDialogo.nombreHistoria);
    formDataHistoria.append('descripcion', this.historiaDialogo.descripcion);
    formDataHistoria.append('administrador_id', this.administradorSeleccionado.id.toString()); 

    if (this.imagenSeleccionada) {
      formDataHistoria.append('imagen', this.imagenSeleccionada);
    }

    const request = this.nuevaHistoria
      ? this.historiaService.postHistoriaConImagen(formDataHistoria)
      : this.historiaService.putHistoriaConImagen(this.historiaDialogo.id, formDataHistoria);

    request.subscribe(() => {
      this.obtenerHistorias();
      this.visible = false;
    });
  }

  onBasicUploadAuto(event: any) {
    this.imagenSeleccionada = event.files[0];
  }
}
