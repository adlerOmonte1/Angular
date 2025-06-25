import { Component } from '@angular/core';
import { apiService } from '../../service/api.service';
import { Categoria } from '../../models/categoria.model';

@Component({
  selector: 'app-categorias',
  standalone: false,
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css',
  providers: [apiService]
})
export class CategoriasComponent {
  constructor(private apiService: apiService) { }

  categorias: Categoria[];
  tituloDialogo: string = "Nueva Categoría";
  visible: boolean = false;
  tipoCategoriaDialogo: Categoria = new Categoria();
  nuevaCategoria:boolean = true;

  // Método para inicializar las categorías al cargar el componente
  obtenerCategorias() {
    this.apiService.getCategoria().subscribe(res=>{
      this.categorias = res;
    })
  }
  ngOnInit() {
    this.obtenerCategorias();

  }
  editarCategoria(categoria: Categoria) {
    this.visible = true;
    this.nuevaCategoria = false;
    this.tipoCategoriaDialogo = categoria;
    this.tituloDialogo = "Editar Categoría";
    // Implementar la lógica para editar una categoría

  }
  eliminarCategoria(categoria: Categoria) {
    this.apiService.deleteCategoria(categoria.id.toString()).subscribe(
      () => this.obtenerCategorias());
    // Implementar la lógica para eliminar una categoría
  }
  abrirDialogo(){
    this.visible = true;
    this.nuevaCategoria = true;
    this.tituloDialogo = "Nueva Categoría";
    this.tipoCategoriaDialogo = new Categoria();


  }
  guardar() {
    if (this.nuevaCategoria){
      this.apiService.postCategoria(this.tipoCategoriaDialogo).subscribe(res => {
      this.obtenerCategorias();
    } );
    }else {
      this.apiService.putCategoria(this.tipoCategoriaDialogo).subscribe(res => {
        this.obtenerCategorias();
      });
    }
    this.visible = false;
    }
}
