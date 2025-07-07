import { Component } from '@angular/core';
import { apiService } from '../../service/api.service';
import { Usuario } from '../../models/usuario.model';
import { Hincha } from '../../models/hincha.model';

@Component({
  selector: 'app-perfil',
  standalone: false,
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  constructor(private apiService: apiService) { }

  usuario: Usuario = new Usuario();
  espectador: Hincha = new Hincha();
  mostrarDialog: boolean = false;

  usuarioOriginal: Usuario = new Usuario();
  espectadorOriginal: Hincha = new Hincha();

  modoEdicion: boolean = false;

  abrirDialogEditar() {
    // Guardamos copia original por si se cancela
    this.usuarioOriginal = { ...this.usuario };
    this.espectadorOriginal = { ...this.espectador };
    this.mostrarDialog = true;
  }

  obtenerUsuarioId(): number {
    const id = localStorage.getItem('userId');
    return id ? +id : 0;
  }

  ngOnInit() {
    const id = this.obtenerUsuarioId();
    this.apiService.getUsuarioconID(id).subscribe((usuario: Usuario) => {
      this.usuario = usuario;
      this.apiService.getHinchaconID(id).subscribe((espectador: Hincha) => {
        this.espectador = espectador;
      });
    });
  }

  guardarPerfil() {
    // Convertir fecha a 'YYYY-MM-DD' si es un Date
    if (this.usuario.fechaNac instanceof Date) {
      const fecha = this.usuario.fechaNac;
      const year = fecha.getFullYear();
      const month = ('0' + (fecha.getMonth() + 1)).slice(-2);
      const day = ('0' + fecha.getDate()).slice(-2);
      this.usuario.fechaNac = `${year}-${month}-${day}`;
    }

    // Primero actualiza el usuario
  this.apiService.putUsuario(this.usuario).subscribe(() => {
    // Verifica si el espectador ya existe (tiene ID válido o alias no vacío)
    if (this.espectador.id) {
      // Ya existe -> actualiza
      this.apiService.putHincha(this.espectador).subscribe(() => {
        this.modoEdicion = false;
        alert('Perfil actualizado correctamente');
        this.usuarioOriginal = { ...this.usuario };
        this.espectadorOriginal = { ...this.espectador };
      });
    } else {
      // No existe -> crear espectador (asociado al usuario)
      const nuevoEspectador: any = {
        ...this.espectador,
        usuario: this.usuario.id
      };

      this.apiService.postHincha(nuevoEspectador).subscribe((creado) => {
        this.espectador = creado;
        this.modoEdicion = false;
        alert('Perfil creado correctamente');
        this.usuarioOriginal = { ...this.usuario };
        this.espectadorOriginal = { ...this.espectador };
      });
    }
  });
  }

  cancelarEdicion() {
    // Restaurar datos originales
    this.usuario = { ...this.usuarioOriginal };
    this.espectador = { ...this.espectadorOriginal };
    this.modoEdicion = false;
  }
}
