import { Component } from '@angular/core';
import { PostHistoria } from '../../models/post-historia.model';
import { Historia } from '../../models/historia.model';
import { apiService } from '../../service/api.service';

@Component({
  selector: 'app-posthistorias',
  standalone: false,
  templateUrl: './post-historia.component.html',
  styleUrls: ['./post-historia.component.css']
})
export class PosthistoriasComponent {
  posthistorias: PostHistoria[];
  historias: Historia[];

  postDialogo = new PostHistoria();
  visible = false;
  nuevaPost = true;
  imagenSeleccionada: File | null = null;
  historiaSeleccionada: Historia | null = null;

  constructor(private api: apiService) {
    this.obtenerPostHistorias();
    this.obtenerHistorias();
  }

  obtenerPostHistorias() {
    this.api.getPostHistorias().subscribe(data => {
      this.posthistorias = data;
    });
  }

  obtenerHistorias() {
    this.api.getHistorias().subscribe(data => {
      this.historias = data;
    });
  }

  abrirDialogo() {
    this.visible = true;
    this.nuevaPost = true;
    this.postDialogo = new PostHistoria();
    this.historiaSeleccionada = null;
    this.imagenSeleccionada = null;
  }

  editarPost(post: PostHistoria) {
    this.visible = true;
    this.nuevaPost = false;
    this.postDialogo = { ...post };

    const historiaId = typeof post.historia === 'object' ? post.historia.id : post.historia;
    this.historiaSeleccionada = this.historias.find(h => h.id === historiaId) || null;

    this.imagenSeleccionada = null;
  }

  eliminarPost(post: PostHistoria) {
    if (post.id) {
      this.api.deletePostHistoria(post.id).subscribe(() => {
        this.obtenerPostHistorias();
      });
    }
  }

  guardarPost() {
    if (!this.historiaSeleccionada) {
      alert('Debes seleccionar una historia');
      return;
    }

    const formData = new FormData();
    formData.append('titulo', this.postDialogo.titulo || '');
    formData.append('contexto', this.postDialogo.contexto || '');
    formData.append('fecha_publicacion', this.postDialogo.fecha_publicacion || '');
    formData.append('historia', this.historiaSeleccionada.id.toString());

    if (this.imagenSeleccionada) {
      formData.append('imagen', this.imagenSeleccionada);
    }

    if (this.nuevaPost) {
      this.api.postPostHistoria(formData).subscribe(() => {
        this.obtenerPostHistorias();
        this.visible = false;
      });
    } else {
      this.api.putPostHistoria(this.postDialogo.id, formData).subscribe(() => {
        this.obtenerPostHistorias();
        this.visible = false;
      });
    }
  }

  onBasicUploadAuto(event: any) {
    if (event.files && event.files.length > 0) {
      this.imagenSeleccionada = event.files[0];
    }
  }

  onImagenSeleccionada(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.imagenSeleccionada = input.files[0];
    }
  }
}
