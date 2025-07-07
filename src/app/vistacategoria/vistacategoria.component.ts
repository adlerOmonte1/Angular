// categoria-hincha.component.ts
import { Component, OnInit } from '@angular/core';
import { apiService } from '../../service/api.service';
import { Categoria } from '../../models/categoria.model';

@Component({
  selector: 'app-categoria-hincha',
  standalone: false,
  templateUrl: './vistacategoria.component.html',
  styleUrls: ['./vistacategoria.component.css'],
  providers: [apiService]
})
export class CategoriaHinchaComponent{
  categorias: Categoria[];

  constructor(private apiService: apiService) {}

  ngOnInit() {
    this.obtenerCategorias();
  }

  obtenerCategorias() {
    this.apiService.getCategoria().subscribe((res) => {
      this.categorias = res;
    });
  }
}
