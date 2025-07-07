import { Component } from '@angular/core';
import { jugador } from '../../models/jugador.model';
import { Administrador } from '../../models/administrador.model';
import { JugadorService } from '../../service/jugador.service';
import { AdministradorService } from '../../service/administrador.service';

@Component({
  selector: 'app-jugador',
  standalone: false,
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent {
  jugadores: jugador[] = [];
  jugadorDialogo: jugador = new jugador();
  visible: boolean = false;
  nuevoJugador: boolean = true;
  tituloDialogo: string = '';

  administradores: Administrador[] = [];
  administradorSeleccionado: Administrador | null = null;
  imagenSeleccionada: File | null = null;

  constructor(
    private jugadorService: JugadorService,
    private administradorService: AdministradorService
  ) {}

  ngOnInit() {
    this.obtenerJugadores();
    this.obtenerAdministradores();
  }

  obtenerJugadores() {
    this.jugadorService.getJugadores().subscribe(res => {
      this.jugadores = res;
    });
  }

  obtenerAdministradores() {
    this.administradorService.getAdministrador().subscribe(res => {
      this.administradores = res;
    });
  }

  abrirDialogo() {
    this.visible = true;
    this.nuevoJugador = true;
    this.tituloDialogo = 'Nuevo Jugador';
    this.jugadorDialogo = new jugador();
    this.imagenSeleccionada = null;
  }

  editarJugador(j: jugador) {
    this.visible = true;
    this.nuevoJugador = false;
    this.tituloDialogo = 'Editar Jugador';
    this.jugadorDialogo = { ...j };
    this.administradorSeleccionado = j.administrador;
  }

  eliminarJugador(j: jugador) {
    this.jugadorService.deleteJugador(j.id.toString()).subscribe(() => {
      this.obtenerJugadores();
    });
  }

  onImagenSeleccionada(event: any) {
    this.imagenSeleccionada = event.files[0];
  }

  guardarJugador() {
    const formData = new FormData();
    formData.append('nombre', this.jugadorDialogo.nombre);
    formData.append('apellido', this.jugadorDialogo.apellido);
    formData.append('edad', String(this.jugadorDialogo.edad));
    formData.append('posicion', this.jugadorDialogo.posicion);
    formData.append('dorsal', String(this.jugadorDialogo.dorsal));
    formData.append('peso', String(this.jugadorDialogo.peso));
    formData.append('altura', String(this.jugadorDialogo.altura));
    formData.append('nacionalidad', this.jugadorDialogo.nacionalidad);
    if (this.imagenSeleccionada) {
      formData.append('imagen', this.imagenSeleccionada);
    }
    if (this.administradorSeleccionado) {
      formData.append('administrador', String(this.administradorSeleccionado.id));
    }

    if (this.nuevoJugador) {
      this.jugadorService.postJugadorConImagen(formData).subscribe(() => {
        this.obtenerJugadores();
        this.visible = false;
      });
    } else {
      this.jugadorService.putJugadorConImagen(formData, this.jugadorDialogo.id.toString()).subscribe(() => {
        this.obtenerJugadores();
        this.visible = false;
      });
    }
  }
}
