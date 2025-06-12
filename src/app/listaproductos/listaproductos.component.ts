import { Component } from '@angular/core';
import { Producto } from '../../models/producto.model';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-listaproductos',
  standalone: false,
  templateUrl: './listaproductos.component.html',
  styleUrl: './listaproductos.component.css',
  providers: [ProductoService]
})
export class ListaproductosComponent {
  //constructor(private api: ProductoService) { }

  produc: Producto[];
/*
  ngOnInit() {
    this.api.getProductos().subscribe(res => {
      this.produc = res;
      console.log(this.produc);
    });
    }*/
}
