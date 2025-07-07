import { Component } from '@angular/core';
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
export class NoticiaComponent {

  noticias: Noticia[];
  visible: boolean = false;
  nuevaNoticia: boolean = true;
  noticiaDialogo: Noticia = new Noticia();

  imagenSeleccionada: File | null = null;

  administradores: administrador[];
  administradorSeleccionado: administrador = {} as administrador;

  constructor(
    private noticiaService: apiService,
    private administradorService: AdministradorService
  ) {}

  ngOnInit() {
    this.obtenerNoticias();
    this.obtenerAdministradores();
  }

  obtenerNoticias() {
    this.noticiaService.getNoticias().subscribe(res => {
      this.noticias = res;
    });
  }

  obtenerAdministradores() {
    this.administradorService.getAdministradores().subscribe(res => {
      this.administradores = res;
    });
  }

  abrirDialogo() {
    this.visible = true;
    this.nuevaNoticia = true;
    this.noticiaDialogo = new Noticia();
    this.imagenSeleccionada = null;
    this.administradorSeleccionado = {} as administrador;
  }

  editarNoticia(noticia: Noticia) {
    this.visible = true;
    this.nuevaNoticia = false;
    this.noticiaDialogo = { ...noticia };
    if (noticia.administrador && typeof noticia.administrador === 'object') {
      this.administradorSeleccionado = this.administradores.find(
        a => a.id === noticia.administrador.id
      )!;
    }

    this.imagenSeleccionada = null;
  }

  eliminarNoticia(noticia: Noticia) {
    this.noticiaService.deleteNoticias(noticia.id!).subscribe(() => {
      this.obtenerNoticias();
    });
  }

  guardarNoticia() {
    const formDataNoticia = new FormData();
    formDataNoticia.append('nombreHistoria', this.noticiaDialogo.nombreHistoria);
    formDataNoticia.append('descripcion', this.noticiaDialogo.descripcion);
    formDataNoticia.append('fecha_publicacion', this.noticiaDialogo.fecha_publicacion);
    formDataNoticia.append('administrador_id', this.administradorSeleccionado.id.toString());

    if (this.imagenSeleccionada) {
      formDataNoticia.append('imagen', this.imagenSeleccionada);
    }

    const request = this.nuevaNoticia
      ? this.noticiaService.postNoticiasForm(formDataNoticia)
      : this.noticiaService.putNoticiasForm(this.noticiaDialogo.id!, formDataNoticia);

    request.subscribe(() => {
      this.obtenerNoticias();
      this.visible = false;
    });
  }

  onBasicUploadAuto(event: any) {
    this.imagenSeleccionada = event.files[0];
  }
}
