import { Component } from '@angular/core';
import { apiService } from '../../service/api.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Producto } from '../../models/producto.model';
import { CarritoProducto } from '../../models/carritoproducto';
import { ProductoService } from '../../service/producto.service';
import { UnidadMedida } from '../../models/unidadmedida';
import { Carrito } from '../../models/carrito.model';
import { CarritoService } from '../../service/carrito.service';

@Component({
  selector: 'app-productohincha',
  standalone: false,
  templateUrl: './productohincha.component.html',
  styleUrl: './productohincha.component.css',
  providers: [apiService, MessageService, ConfirmationService,ProductoService,CarritoService]
})
export class ProductohinchaComponent {
  constructor(private api:apiService, private conf:ConfirmationService,
    private msg:MessageService,private productoService:ProductoService,private carritoService:CarritoService) {}

  Listaproductos:Producto[];
  tallas: UnidadMedida[];
  carrito: Carrito [];
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
  obtenerCarritos(){
    this.carritoService.getCarrito().subscribe(res => {
      this.carrito = res;
    });
  }

  ngOnInit(){
    this.obtenerProductos();
    this.obtenerUnidadMedida();
  }
  
    actualizarSubtotal(detalle: CarritoProducto) {
    detalle.subtotal = detalle.subtotalxunidad * detalle.cantidad;
    this.calcularTotal(); // Para actualizar el total general
  }
  cambiarSubTotal(indice:number){
    console.log(indice);
    this.detalles[indice].subtotal = this.detalles[indice].cantidad* this.detalles[indice].producto_precio;
    this.calcularTotal()
  }
  calcularTotal(){
    this.totalPedido = 0;
    this.detalles.forEach(detalle => {
      detalle.subtotal = detalle.cantidad * detalle.subtotalxunidad;
      this.totalPedido += Number(detalle.subtotal);
    });
  }
  agregarProducto(producto: Producto, unidadMedida: UnidadMedida) {
    const detalle = new CarritoProducto();
    detalle.carrito = 1;
    detalle.producto = producto.id;
    detalle.unidadMedida = unidadMedida.id;
    detalle.producto_nombre = producto.nombre;
    detalle.producto_precio = producto.precio;
    detalle.subtotalxunidad = producto.precio_final;
    detalle.imagen_url = producto.imagen_url;
    detalle.cantidad = producto.cantidadSeleccionada || 1;
    detalle.subtotal = detalle.subtotalxunidad * detalle.cantidad;
    this.detalles.push(detalle);
    this.calcularTotal();
  }
}
