import { Component } from '@angular/core';
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
export class PartidoComponent {

  partidos: Partido[];
  visible: boolean = false;
  nuevoPartido: boolean = true;
  partidoDialogo: Partido = new Partido();

  administradores: Administrador[];
  administradorSeleccionado: Administrador | undefined;

  constructor(
    private partidoService: apiService,
    private administradorService: AdministradorService
  ) {
    this.obtenerPartidos();
    this.obtenerAdministradores();
  }

  abrirDialogo() {
    this.visible = true;
    this.nuevoPartido = true;
    this.partidoDialogo = new Partido();
    this.administradorSeleccionado = undefined;
  }

  obtenerPartidos() {
    this.partidoService.getPartidos().subscribe(res => {
      this.partidos = res;
    });
  }

  obtenerAdministradores() {
    this.administradorService.getAdministrador().subscribe(res => {
      this.administradores = res;
    });
  }

  editarPartido(partido: Partido) {
    this.visible = true;
    this.nuevoPartido = false;
    this.partidoDialogo = { ...partido };
    this.administradorSeleccionado = this.administradores.find(a => a.id === partido.administrador.id)!;
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

    const partidoPayload = {
      nombre_partido: this.partidoDialogo.nombre_partido,
      lugar_partido: this.partidoDialogo.lugar_partido,
      fecha_partido: this.partidoDialogo.fecha_partido,
      hora_partido: this.partidoDialogo.hora_partido,
      resultado: this.partidoDialogo.resultado,
      administrador_id: this.administradorSeleccionado.id
    };

    if (this.nuevoPartido) {
      this.partidoService.postPartido(partidoPayload).subscribe(() => {
        this.obtenerPartidos();
        this.visible = false;
      });
    } else {
      const id = this.partidoDialogo.id;
      this.partidoService.putPartido({ id, ...partidoPayload }).subscribe(() => {
        this.obtenerPartidos();
        this.visible = false;
      });
    }
  }
}
