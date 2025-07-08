import { Component } from '@angular/core';
import { Noticia } from '../../models/noticias.model';
import { Administrador } from '../../models/administrador.model';
import { apiService } from '../../service/api.service';
import { AdministradorService } from '../../service/administrador.service';

@Component({
  selector: 'app-noticia',
  standalone: false,
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css'],
  providers: [apiService, AdministradorService]
})
export class NoticiaComponent {

  noticias: Noticia[];
  visible: boolean = false;
  nuevaNoticia: boolean = true;
  noticiaDialogo: Noticia = new Noticia();

  imagenSeleccionada: File | null = null;

  administradores: Administrador[];
  administradorSeleccionado: Administrador | undefined;

  constructor(
    private noticiaService: apiService,
    private administradorService: AdministradorService
  ) {
    this.obtenerNoticias();
    this.obtenerAdministradores();
  }

  abrirDialogo() {
    this.visible = true;
    this.nuevaNoticia = true;
    this.noticiaDialogo = new Noticia();
    this.imagenSeleccionada = null;
    this.administradorSeleccionado = undefined;
  }

  obtenerNoticias() {
    this.noticiaService.getNoticias().subscribe(res => {
      this.noticias = res;
    });
  }

  obtenerAdministradores() {
    this.administradorService.getAdministrador().subscribe(res => {
      this.administradores = res;
    });
  }

  editarNoticia(noticia: Noticia) {
    this.visible = true;
    this.nuevaNoticia = false;
    this.noticiaDialogo = { ...noticia };
    this.administradorSeleccionado = this.administradores.find(
      a => a.id === (typeof noticia.administrador === 'object' ? noticia.administrador.id : noticia.administrador)
    );
    this.imagenSeleccionada = null;
  }

  eliminarNoticia(noticia: Noticia) {
    this.noticiaService.deleteNoticias(noticia.id).subscribe(() => {
      this.obtenerNoticias();
    });
  }

  guardarNoticia() {
    if (!this.administradorSeleccionado) {
      alert('Debes seleccionar un administrador');
      return;
    }

    const formData = new FormData();
    formData.append('titulo', this.noticiaDialogo.titulo);
    formData.append('contenido', this.noticiaDialogo.contenido);
    formData.append('fecha_publicacion', this.noticiaDialogo.fecha_publicacion);
    formData.append('administrador_id', this.administradorSeleccionado.id.toString());

    if (this.imagenSeleccionada) {
      formData.append('imagen', this.imagenSeleccionada);
    }

    if (this.nuevaNoticia) {
      this.noticiaService.postNoticiasForm(formData).subscribe(() => {
        this.obtenerNoticias();
        this.visible = false;
      });
    } else {
      this.noticiaService.putNoticiasForm(this.noticiaDialogo.id, formData).subscribe(() => {
        this.obtenerNoticias();
        this.visible = false;
      });
    }
  }

  onBasicUploadAuto(event: any) {
    if (event.files && event.files.length > 0) {
      this.imagenSeleccionada = event.files[0];
    }
  }
}
