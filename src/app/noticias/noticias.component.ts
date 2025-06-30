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
    this.visible = true;
  }

  editarNoticia(noticia: Noticia): void {
    this.nuevaNoticia = false;
    this.noticiaDialogo = { ...noticia };
    this.administradorSeleccionado = this.administradores.find(adm => adm.id === noticia.administrador);
    this.visible = true;
  }

  eliminarNoticia(noticia: Noticia): void {
    if (noticia.id !== undefined && confirm('¿Estás seguro de eliminar esta noticia?')) {
      this.noticiaService.deleteNoticias(noticia.id.toString()).subscribe(() => {
        this.obtenerNoticias();
      });
    }
  }

  guardarNoticia(): void {
    if (!this.administradorSeleccionado) {
      alert('Debes seleccionar un administrador');
      return;
    }

    this.noticiaDialogo.administrador = this.administradorSeleccionado.id;

    if (this.nuevaNoticia) {
      this.noticiaService.postNoticias(this.noticiaDialogo).subscribe(() => {
        this.obtenerNoticias();
        this.visible = false;
      });
    } else {
      this.noticiaService.putNoticias(this.noticiaDialogo).subscribe(() => {
        this.obtenerNoticias();
        this.visible = false;
      });
    }
  }
}
