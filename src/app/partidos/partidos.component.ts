import { Component } from '@angular/core';
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
export class PartidoComponent {
  constructor(
    private partidoService: apiService,
    private administradorService: AdministradorService
  ) {
    this.obtenerPartidos();
    this.obtenerAdministradores();
  }

  partidos: Partido[];
  visible: boolean = false;
  nuevoPartido: boolean = true;
  partidoDialogo: Partido = new Partido();

  administradores: administrador[];
  administradorSeleccionado: administrador;

  abrirDialogo() {
    this.visible = true;
    this.nuevoPartido = true;
    this.partidoDialogo = new Partido();
    this.administradorSeleccionado = undefined!;
  }

  obtenerPartidos() {
    this.partidoService.getPartidos().subscribe(res => {
      this.partidos = res;
    });
  }

  obtenerAdministradores() {
    this.administradorService.getAdministradores().subscribe(res => {
      this.administradores = res;
    });
  }

  editarPartido(partido: Partido) {
    this.visible = true;
    this.nuevoPartido = false;
    this.partidoDialogo = { ...partido };
    this.administradorSeleccionado = this.administradores.find(adm =>
    adm.id === (partido.administrador as any)?.id || partido.administrador
    )!;
  }

  eliminarPartido(partido: Partido) {
    this.partidoService.deletePartido(partido.id).subscribe(() => {
      this.obtenerPartidos();
    });
  }

  guardarPartido() {
    if (!this.administradorSeleccionado) {
      alert('Debes seleccionar un administrador');
      return;
    }

    const data: any = {
      ...this.partidoDialogo,
      administrador_id: this.administradorSeleccionado.id
    };

    delete data.administrador;

    if (this.nuevoPartido) {
      this.partidoService.postPartido(data).subscribe(() => {
        this.obtenerPartidos();
        this.visible = false;
      });
    } else {
      this.partidoService.putPartido(this.partidoDialogo.id, data).subscribe(() => {
        this.obtenerPartidos();
        this.visible = false;
      });
    }
  }
}
