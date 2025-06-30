import { Component, OnInit } from '@angular/core';
import { Partido } from '../../models/partidos.model';
import { administrador } from '../../models/administrador.model';
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
  administradores: administrador[] = [];
  administradorSeleccionado: administrador | undefined;

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
    this.administradorService.getAdministradores().subscribe(res => {
      this.administradores = res;
    });
  }

  abrirDialogo(): void {
    this.nuevoPartido = true;
    this.partidoDialogo = new Partido();
    this.administradorSeleccionado = undefined;
    this.visible = true;
  }

  editarPartido(partido: Partido): void {
    this.nuevoPartido = false;
    this.partidoDialogo = { ...partido };
    this.administradorSeleccionado = this.administradores.find(adm => adm.id === (partido.administrador as any)?.id || partido.administrador);
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
    if (!this.administradorSeleccionado) {
      alert('Debes seleccionar un administrador');
      return;
    }

    // Enviar el ID correcto como administrador_id, no como objeto completo
    const data: any = {
      ...this.partidoDialogo,
      administrador_id: this.administradorSeleccionado.id
    };

    // Limpieza opcional del objeto si tiene campos extra
    delete data.administrador;

    if (this.nuevoPartido) {
      this.partidoService.postPartido(data).subscribe(() => {
        this.obtenerPartidos();
        this.visible = false;
      });
    } else {
      this.partidoService.putPartido(this.partidoDialogo.id!, data).subscribe(() => {
        this.obtenerPartidos();
        this.visible = false;
      });
    }
  }
}
