import { Component } from '@angular/core';
import { apiService } from '../../service/api.service';
import { ProductoService } from '../../service/producto.service';
import { AlmacenService } from '../../service/almacen.service';
import { Producto } from '../../models/producto.model';
import { Stock } from '../../models/stock.model';
import { Almacen } from '../../models/almacen.model';
import { UnidadMedida } from '../../models/unidadmedida';

@Component({
  selector: 'app-stock',
  standalone: false,
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css',
  providers:[apiService]
})
export class StockComponent {
 constructor(private productoService: ProductoService,
     private apiService: apiService, private almacenService: AlmacenService
     ) { }
  recomposicion : Stock[]
  visible: boolean = false;
  nuevoStock: boolean = true;
  stockDialogo: Stock = new Stock();
  almacen : Almacen [];
  almacenSeleccionado: Almacen
  medida : UnidadMedida [];
  medidaSeleccionada : UnidadMedida;
  producto : Producto [];
  productoSeleccionado : Producto
   abrirDialogo() {
     this.visible = true;
     this.nuevoStock = true;
     this.stockDialogo = new Stock();
   }
 
   obtenerStock() {
     this.apiService.getStock().subscribe(res => {
       this.recomposicion = res;
     });
   }
 
   obtenerAlmacenes() {
     this.almacenService.getAlmacen().subscribe(res => {
       this.almacen = res;
     });
   }
   obtenerUnidadMedida(){
    this.apiService.getTallas().subscribe(res =>{
      this.medida = res;
    })
   }
   obtenerProductos(){
    this.productoService.getProducto().subscribe(res=>{
      this.producto =res;
    })
   }
   
   ngOnInit() {
    this.obtenerStock();
    this.obtenerUnidadMedida();
    this.obtenerAlmacenes();
    this.obtenerProductos();
   }
 
   editarStock(stock: Stock) {
     this.visible = true;
     this.nuevoStock = false;
     this.stockDialogo = stock;
     this.almacenSeleccionado = this.almacen.find(c => c.id === stock.almacen.id)!;
     this.medidaSeleccionada = this.medida.find(p => p.id === stock.unidadMedida.id)!;
     this.productoSeleccionado = this.producto.find(i =>i.id === stock.producto.id)!;
   }
 
   eliminarStock(stock: Stock) {
     this.apiService.deleteStock(stock.id.toString()).subscribe(() => {
       this.obtenerStock();
     });
   }
 
   guardarStock() {
     const formDataStock= new FormData();
     formDataStock.append('almacen', this.almacenSeleccionado.id.toString());
     formDataStock.append('medida', this.medidaSeleccionada.id.toString());
     formDataStock.append('producto',this.productoSeleccionado.id.toString());
     formDataStock.append('cantidad', this.stockDialogo.cantidad.toString());
   }
   
 }
 
