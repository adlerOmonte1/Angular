import { Component } from '@angular/core';
import { PostHistoria } from '../../models/post-historia.model';
import { Historia } from '../../models/historia.model';
import { apiService } from '../../service/api.service';

@Component({
  selector: 'app-posthistorias',
  standalone: false,
  templateUrl: './posthistorias.component.html',
  styleUrls: ['./posthistorias.component.css']
})
export class PosthistoriasComponent {

  posthistorias: PostHistoria[];
  historias: Historia[];
  postDialogo: PostHistoria = new PostHistoria();

  visible: boolean = false;
  nuevaPost: boolean = true;

  imagenSeleccionada: File | null = null;
  historiaSeleccionada: Historia;

  constructor(private api: apiService) {}

  ngOnInit() {
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
    this.historiaSeleccionada = {} as Historia;
    this.imagenSeleccionada = null;
  }

  editarPost(post: PostHistoria) {
    this.visible = true;
    this.nuevaPost = false;
    this.postDialogo = { ...post };
    const historiaEncontrada = this.historias.find(h => h.id === (post.historia as Historia).id || post.historia);
    this.historiaSeleccionada = historiaEncontrada ? historiaEncontrada : {} as Historia;
    this.imagenSeleccionada = null;
  }

  eliminarPost(post: PostHistoria) {
    this.api.deletePostHistoria(post.id).subscribe(() => {
      this.obtenerPostHistorias();
    });
  }

  guardarPost() {
    const formData = new FormData();
    formData.append('titulo', this.postDialogo.titulo);
    formData.append('contexto', this.postDialogo.contexto);
    formData.append('fecha_publicacion', this.postDialogo.fecha_publicacion);
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
    this.imagenSeleccionada = event.files[0];
  }
}
