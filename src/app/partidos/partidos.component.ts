import { Component, OnInit } from '@angular/core';
import { Partido } from '../../models/partidos.model';
import { Administrador } from '../../models/administrador.model';
import { apiService } from '../../service/api.service';
import { AdministradorService } from '../../service/administrador.service';

@Component({
  selector: 'app-partido',
  standalone: false,
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css'],
  providers: [apiService, AdministradorService]
})
export class PartidoComponent implements OnInit {

  partidos: Partido[] = [];
  administradores: Administrador[] = [];
  administradorSeleccionado: Administrador | undefined;

  visible: boolean = false;
  nuevoPartido: boolean = true;
  partidoDialogo: Partido = new Partido();

  constructor(
    private partidoService: apiService,
    private administradorService: AdministradorService
  ) {}

  ngOnInit(): void {
    this.obtenerPartidos();
    this.obtenerAdministradores();
  }

  obtenerPartidos(): void {
    this.partidoService.getPartidos().subscribe(res => {
      this.partidos = res;
    });
  }

  obtenerAdministradores(): void {
    this.administradorService.getAdministrador().subscribe(res => {
      this.administradores = res;
    });
  }

  abrirDialogo(): void {
    this.nuevoPartido = true;
    this.partidoDialogo = new Partido();
    this.administradorSeleccionado = undefined;
    this.visible = true;
  }



  eliminarPartido(partido: Partido): void {
    if (partido.id !== undefined && confirm('¿Estás seguro de eliminar este partido?')) {
      this.partidoService.deletePartido(partido.id).subscribe(() => {
        this.obtenerPartidos();
      });
    }
  }

  guardarPartido(): void {

    if (this.nuevoPartido) {
      this.partidoService.postPartido(this.partidoDialogo).subscribe(() => {
        this.obtenerPartidos();
        this.visible = false;
      });
    } else {
      this.partidoService.putPartido(this.partidoDialogo).subscribe(() => {
        this.obtenerPartidos();
        this.visible = false;
      });
    }
  }
}

