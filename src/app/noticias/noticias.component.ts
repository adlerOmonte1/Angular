import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../models/noticias.model';
import { administrador } from '../../models/administrador.model';
import { apiService } from '../../service/api.service';
import { AdministradorService } from '../../service/administrador.service';

@Component({
  selector: 'app-noticia',
  standalone: false,
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css'],
  providers: [apiService, AdministradorService]
})
export class NoticiaComponent implements OnInit {

  noticias: Noticia[] = [];
  administradores: administrador[] = [];
  administradorSeleccionado: administrador | undefined;

  visible: boolean = false;
  nuevaNoticia: boolean = true;
  noticiaDialogo: Noticia = new Noticia();

  imagenSeleccionada: File | null = null;
  imagenTemporal: string | null = null;

  constructor(
    private noticiaService: apiService,
    private administradorService: AdministradorService
  ) {}

  ngOnInit(): void {
    this.obtenerNoticias();
    this.obtenerAdministradores();
  }

  obtenerNoticias(): void {
    this.noticiaService.getNoticias().subscribe(res => {
      this.noticias = res;
    });
  }

  obtenerAdministradores(): void {
    this.administradorService.getAdministradores().subscribe(res => {
      this.administradores = res;
    });
  }

  abrirDialogo(): void {
    this.nuevaNoticia = true;
    this.noticiaDialogo = new Noticia();
    this.administradorSeleccionado = undefined;
    this.imagenSeleccionada = null;
    this.imagenTemporal = null;
    this.visible = true;
  }

  editarNoticia(noticia: Noticia): void {
    this.nuevaNoticia = false;
    this.noticiaDialogo = { ...noticia };
    this.administradorSeleccionado = this.administradores.find(adm => adm.id === noticia.administrador);
    this.imagenTemporal = noticia.imagen_url ? `http://127.0.0.1:8000${noticia.imagen_url}` : null;
    this.imagenSeleccionada = null;  // Reset file input on edit
    this.visible = true;
  }

  eliminarNoticia(noticia: Noticia): void {
    if (noticia.id !== undefined && confirm('¿Estás seguro de eliminar esta noticia?')) {
      this.noticiaService.deleteNoticias(noticia.id).subscribe(() => {
        this.obtenerNoticias();
      });
    }
  }

  onImagenSeleccionada(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.imagenSeleccionada = file;

      const reader = new FileReader();
      reader.onload = () => this.imagenTemporal = reader.result as string;
      reader.readAsDataURL(file);
    }
  }

  guardarNoticia(): void {
    if (!this.administradorSeleccionado) {
      alert('Debes seleccionar un administrador');
      return;
    }

    const formData = new FormData();
    formData.append('titulo', this.noticiaDialogo.titulo || '');
    formData.append('contenido', this.noticiaDialogo.contenido || '');
    formData.append('fecha_publicacion', this.noticiaDialogo.fecha_publicacion || '');
    formData.append('administrador_id', this.administradorSeleccionado.id.toString());  // <-- Corregido aquí

    if (this.imagenSeleccionada) {
      formData.append('imagen', this.imagenSeleccionada);
    }

    if (this.nuevaNoticia) {
      this.noticiaService.postNoticiasForm(formData).subscribe(() => {
        this.obtenerNoticias();
        this.visible = false;
        this.imagenTemporal = null;
      });
    } else {
      this.noticiaService.putNoticiasForm(this.noticiaDialogo.id!, formData).subscribe(() => {
        this.obtenerNoticias();
        this.visible = false;
        this.imagenTemporal = null;
      });
    }
  }
}
