import { Component } from '@angular/core';
import { JugadorService } from '../../service/jugador.service';
import { Jugador } from '../../models/jugador.model';

@Component({
  selector: 'app-jugador-hincha',
  standalone: false,
  templateUrl: './jugador-hincha.component.html',
  styleUrl: './jugador-hincha.component.css',
  providers: [JugadorService]
})
export class JugadorHinchaComponent {
  constructor(private api: JugadorService) {}

  jugadores: Jugador[] = [];

  obtenerJugadores() {
    this.api.getJugador().subscribe((res) => {
      this.jugadores = res;
    });
  }

  ngOnInit() {
    this.obtenerJugadores();
  }
}
