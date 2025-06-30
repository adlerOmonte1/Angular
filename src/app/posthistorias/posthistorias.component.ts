import { Component, OnInit } from '@angular/core';
import { apiService } from '../../service/api.service';
import { PostHistoria } from '../../models/post-historia.model';
import { Historia } from '../../models/historia.model';

@Component({
  selector: 'app-posthistorias',
  standalone: false,
  templateUrl: './posthistorias.component.html',
  styleUrls: ['./posthistorias.component.css']
})
export class PosthistoriasComponent implements OnInit {

  posthistorias: PostHistoria[] = [];
  historias: Historia[] = [];

  postDialogo: PostHistoria = {} as PostHistoria;
  visible: boolean = false;
  historiaSeleccionada: number | null = null;

  constructor(private api: apiService) {}

  ngOnInit(): void {
    this.obtenerPostHistorias();
    this.obtenerHistorias();
  }

  obtenerPostHistorias(): void {
    this.api.getPostHistorias().subscribe(data => this.posthistorias = data);
  }

  obtenerHistorias(): void {
    this.api.getHistorias().subscribe(data => this.historias = data);
  }

  abrirDialogo(): void {
    this.postDialogo = {} as PostHistoria;
    this.historiaSeleccionada = null;
    this.visible = true;
  }

  editarPost(post: PostHistoria): void {
    this.postDialogo = {...post};
    this.historiaSeleccionada = post.historia;
    this.visible = true;
  }

  eliminarPost(post: PostHistoria): void {
    if (post.id) {
      this.api.deletePostHistoria(post.id).subscribe(() => this.obtenerPostHistorias());
    }
  }

  guardarPost(): void {
    if (this.historiaSeleccionada !== null) {
      this.postDialogo.historia = this.historiaSeleccionada;
    }
    if (this.postDialogo.id) {
      this.api.putPostHistoria(this.postDialogo).subscribe(() => {
        this.obtenerPostHistorias();
        this.visible = false;
      });
    } else {
      this.api.postPostHistoria(this.postDialogo).subscribe(() => {
        this.obtenerPostHistorias();
        this.visible = false;
      });
    }
  }
}
