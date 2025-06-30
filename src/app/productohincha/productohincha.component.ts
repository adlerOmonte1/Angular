import { Component } from '@angular/core';
import { apiService } from '../../service/api.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Producto } from '../../models/producto.model';
import { CarritoProducto } from '../../models/carritoproducto';
import { ProductoService } from '../../service/producto.service';
import { UnidadMedida } from '../../models/unidadmedida';

@Component({
  selector: 'app-productohincha',
  standalone: false,
  templateUrl: './productohincha.component.html',
  styleUrl: './productohincha.component.css',
  providers: [apiService, MessageService, ConfirmationService,ProductoService]
})
export class ProductohinchaComponent {
  constructor(private api:apiService, private conf:ConfirmationService,
    private msg:MessageService,private productoService:ProductoService) {}

  Listaproductos:Producto[];
  tallas: UnidadMedida[];
  detalles:CarritoProducto[] = [];
  totalPedido:number = 0;

  obtenerProductos() {
    this.productoService.getProducto().subscribe(res => {
      this.Listaproductos = res;
    });
  }
  obtenerUnidadMedida(){
    this.api.getTallas().subscribe(res => {
      this.tallas = res;
    });
  }

  ngOnInit(){
    this.obtenerProductos();
    this.obtenerUnidadMedida();
  }

  agregarProducto(producto: Producto, unidadMedida: UnidadMedida) {
    const detalle = new CarritoProducto();
    detalle.carrito = 1;
    detalle.producto = producto.id;
    detalle.unidadMedida = unidadMedida.id;
    detalle.producto_nombre = producto.nombre;
    detalle.producto_precio = producto.precio;
    detalle.subtotal = producto.precio_final;
    detalle.imagen_url = producto.imagen_url;
    detalle.cantidad = 1;
    this.detalles.push(detalle);
  }
}
