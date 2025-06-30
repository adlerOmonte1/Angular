import { Component, OnInit } from '@angular/core';
import { jugador } from '../../models/jugador.model';
import { administrador } from '../../models/administrador.model';
import { JugadorService } from '../../service/jugador.service';
import { AdministradorService } from '../../service/administrador.service';

@Component({
  selector: 'app-jugador',
  standalone: false,
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css'],
  providers: [JugadorService]
})
export class JugadorComponent{

  jugadores: jugador[] = [];
  administradores: administrador[] = [];
  jugadorDialogo: jugador = new jugador();
  tituloDialogo: string = 'Nuevo Jugador';
  visible: boolean = false;
  nuevoJugador: boolean = true;

  constructor(
    private api: JugadorService,
    private adminService: AdministradorService
  ) {}

  ngOnInit() {
    this.obtenerJugadores();
    this.obtenerAdministradores();
  }

  obtenerJugadores() {
    this.api.getJugadores().subscribe(res => {
      this.jugadores = res;
    });
  }

  obtenerAdministradores() {
    this.adminService.getAdministradores().subscribe(res => {
      this.administradores = res;
    });
  }

  abrirDialogo() {
    this.visible = true;
    this.nuevoJugador = true;
    this.jugadorDialogo = new jugador();
  }

  editarJugador(j: jugador) {
    this.visible = true;
    this.nuevoJugador = false;
    this.jugadorDialogo = j;
  }

  eliminarJugador(j: jugador) {
    if (j.id) {
      this.api.deleteJugador(j.id).subscribe(() => {
        this.obtenerJugadores();
      });
    }
  }

  guardarJugador() {
    if (this.nuevoJugador) {
      this.api.postJugador(this.jugadorDialogo).subscribe(() => {
        this.obtenerJugadores();
      });
    } else {
      this.api.putJugador(this.jugadorDialogo).subscribe(() => {
        this.obtenerJugadores();
      });
    }
    this.visible = false;
  }

  obtenerNombreAdmin(id: string): string {
    const admin = this.administradores.find(a => a.id === id);
    return admin ? id : '';
  }
}
