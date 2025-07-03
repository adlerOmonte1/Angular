import { Component } from '@angular/core';
import { JugadorService } from '../../service/jugador.service';
import { jugador } from '../../models/jugador.model';

@Component({
  selector: 'app-jugador-hincha',
  standalone: false,
  templateUrl: './jugador-hincha.component.html',
  styleUrl: './jugador-hincha.component.css',
  providers: [JugadorService]
})
export class JugadorHinchaComponent {
  constructor(private api: JugadorService) {}

  jugadores: jugador[] = [];

  obtenerJugadores() {
    this.api.getJugadores().subscribe((res) => {
      this.jugadores = res;
    });
  }

  ngOnInit() {
    this.obtenerJugadores();
  }
}
