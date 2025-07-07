import { Component, OnInit } from '@angular/core';
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
export class HistoriaComponent implements OnInit {

  historias: Historia[] = [];
  administradores: Administrador[] = [];
  administradorSeleccionado: Administrador | undefined;

  visible: boolean = false;
  nuevaHistoria: boolean = true;
  historiaDialogo: Historia = new Historia();

  constructor(
    private historiaService: apiService,
    private administradorService: AdministradorService
  ) {}

  ngOnInit(): void {
    this.obtenerHistorias();
    this.obtenerAdministradores();
  }

  obtenerHistorias(): void {
    this.historiaService.getHistorias().subscribe(res => {
      this.historias = res;
    });
  }

  obtenerAdministradores(): void {
    this.administradorService.getAdministrador().subscribe(res => {
      this.administradores = res;
    });
  }

  abrirDialogo(): void {
    this.nuevaHistoria = true;
    this.historiaDialogo = new Historia();
    this.administradorSeleccionado = undefined;
    this.visible = true;
  }

  editarHistoria(historia: Historia): void {
    this.nuevaHistoria = false;
    this.historiaDialogo = { ...historia };
    this.administradorSeleccionado = this.administradores.find(adm => adm.id === (Array.isArray(historia.administrador) ? historia.administrador[0]?.id : historia.administrador));
    this.visible = true;
  }

  eliminarHistoria(historia: Historia): void {
    if (historia.id !== undefined && confirm('¿Estás seguro de eliminar esta historia?')) {
      this.historiaService.deleteHistoria(historia.id).subscribe(() => {
        this.obtenerHistorias();
      });
    }
  }

  guardarHistoria(): void {
    if (!this.administradorSeleccionado) {
      alert('Debes seleccionar un administrador');
      return;
    }

    //  Solo asignamos el ID del administrador como string
    this.historiaDialogo.administrador = String(this.administradorSeleccionado.id);

    if (this.nuevaHistoria) {
      this.historiaService.postHistoria(this.historiaDialogo).subscribe(() => {
        this.obtenerHistorias();
        this.visible = false;
      });
    } else {
      this.historiaService.putHistoria(this.historiaDialogo).subscribe(() => {
        this.obtenerHistorias();
        this.visible = false;
      });
    }
  }
}
