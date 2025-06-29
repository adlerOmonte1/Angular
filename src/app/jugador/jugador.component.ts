import { Component, OnInit } from '@angular/core';
import { JugadorService } from '../../service/jugador.service';
import { Jugador } from '../../models/jugador.model';
import { administrador } from '../../models/administrador.model';  // Importa el modelo de Administrador
import { AdministradorService } from '../../service/administrador.service'; // Importa el servicio de Administrador

@Component({
  selector: 'app-jugador',
  standalone: false,
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css'],
  providers: [JugadorService, AdministradorService]
})
export class JugadorComponent implements OnInit {

  jugadores: Jugador[] = [];
  administradores: administrador[] = [];  // Lista de administradores
  tituloDialogo: string = 'Nuevo Jugador';
  visible: boolean = false;
  jugadorDialogo: Jugador = new Jugador();
  nuevaJugador: boolean = true;
administrador: any;
Administrador: any;

  constructor(private api: JugadorService, private apiAdministrador: AdministradorService) {}

  ngOnInit() {
    this.obtenerJugadores();
    this.obtenerAdministradores();
  }

  obtenerJugadores() {
    this.api.getJugador().subscribe((res) => {
      this.jugadores = res;
    });
  }

  obtenerAdministradores() {
    this.apiAdministrador.getAdministradores().subscribe((res) => {
      this.administradores = res;
    });
  }

  editarJugador(jugador: Jugador) {
    this.visible = true;
    this.nuevaJugador = false;
    this.jugadorDialogo = jugador;
  }

  eliminarJugador(jugador: Jugador) {
    this.api.deleteJugador(jugador.id.toString()).subscribe(() => {
      this.obtenerJugadores();
    });
  }

  abrirDialogo() {
    this.visible = true;
    this.nuevaJugador = true;
    this.jugadorDialogo = new Jugador();
  }

  guardarJugador() {
    if (this.nuevaJugador) {
      this.api.postJugador(this.jugadorDialogo).subscribe(res => {
        this.obtenerJugadores();
      });
    } else {
      this.api.putJugador(this.jugadorDialogo).subscribe(res => {
        this.obtenerJugadores();
      });
    }
    this.visible = false;
  }
}
