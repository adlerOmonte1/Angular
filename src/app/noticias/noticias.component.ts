import { Component } from '@angular/core';
import { Noticias } from '../../models/noticias.model';
import { apiService } from '../../service/api.service';
import { Categoria } from '../../models/categoria.model';

@Component({
  selector: 'app-noticias',
  standalone: false,
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {
  constructor(private apiService: apiService) {}
  noticias: Noticias[];
  visible: boolean = false;
  tituloDialogo: string = "Nueva Noticia";
  NoticiaDialogo: Noticias = new Noticias();
  nuevaNoticia: boolean = true;
  categorias: Categoria[];
  imagenSeleccionada: File | null = null;




  obtenerCategorias() {

  }
  obtenerNoticias() {
    this.apiService.getNoticias().subscribe(res=>{
      this.noticias = res;
    })
  }
  ngOnInit() {
    // para obtener las noticias y categorias al iniciar el componente
    this.obtenerNoticias();
    this.obtenerCategorias();
  }
  editarNoticia(noticia: Noticias) {
    this.visible = true;
    this.nuevaNoticia=false;
    this.NoticiaDialogo = noticia;
    this.tituloDialogo = "Editar Noticia";

  }
  eliminarNoticia(noticia: Noticias) {
    this.apiService.deleteNoticias(noticia.id.toString()).subscribe(()=>
    this.obtenerNoticias)  }

  abrirDialogo() {
    this.visible = true;
    this.nuevaNoticia = true;
    this.tituloDialogo = "Nueva Noticia";
    this.NoticiaDialogo = new Noticias();
  }
  guardar() {
    if (this.nuevaNoticia) {
      this.apiService.postNoticias(this.NoticiaDialogo).subscribe(res => {
        this.obtenerNoticias();
      });
    } else {
      this.apiService.putNoticias(this.NoticiaDialogo).subscribe(res => {
        this.obtenerNoticias();
      });
    }
    this.visible = false;
  }
  onBasicUpload(event: any) {
    this.imagenSeleccionada = event.files[0]; // variable para almacenar la imagen seleccionada
    console.log(this.imagenSeleccionada);
  }

}
