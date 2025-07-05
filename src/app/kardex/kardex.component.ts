import { Component } from '@angular/core';
import { apiService } from '../../service/api.service';
import { ProductoService } from '../../service/producto.service';
import { AlmacenService } from '../../service/almacen.service';
import { Producto } from '../../models/producto.model';
import { Almacen } from '../../models/almacen.model';
import { UnidadMedida } from '../../models/unidadmedida';
import { Kardex } from '../../models/kardex.model';

@Component({
  selector: 'app-kardex',
  standalone: false,
  templateUrl: './kardex.component.html',
  styleUrl: './kardex.component.css',
  providers:[apiService]
})
export class KardexComponent {
 constructor(private productoService: ProductoService,
     private apiService: apiService, private almacenService: AlmacenService
     ) { }
  control : Kardex[]
  visible: boolean = false;
  nuevoKardex: boolean = true;
  KardexkDialogo: Kardex = new Kardex();
  almacen : Almacen [];
  almacenSeleccionado: Almacen
  medida : UnidadMedida [];
  medidaSeleccionada : UnidadMedida;
  producto : Producto [];
  productoSeleccionado : Producto;
  tipos = [
      { nombre: 'Entrada', value: 'entrada' },
      { nombre: 'Salida', value: 'salida' }
    ];
   abrirDialogo() {
     this.visible = true;
     this.nuevoKardex = true;
     this.KardexkDialogo = new Kardex();
   }

   obtenerKardex() {
     this.apiService.getKardex().subscribe(res => {
       this.control = res;
     });
   }

   obtenerAlmacenes() {
     this.almacenService.getAlmacen().subscribe(res => {
       this.almacen = res;
     });
   }
   obtenerUnidadMedida(){
    this.apiService.getTallas().subscribe(res =>{
      console.log('Tallas recibidas:', res);
      this.medida = res;
    })
   }
   obtenerProductos(){
    this.productoService.getProducto().subscribe(res=>{
      this.producto =res;
    })
   }


   ngOnInit() {
    this.obtenerKardex();
    this.obtenerUnidadMedida();
    this.obtenerAlmacenes();
    this.obtenerProductos();
   }

   editarKardex(control: Kardex) {
     this.visible = true;
     this.nuevoKardex = false;
     this.KardexkDialogo = control;
     //this.almacenSeleccionado = this.almacen.find(c => c.id === stock.almacen.id)!;
     //this.medidaSeleccionada = this.medida.find(p => p.id === stock.unidadMedida.id)!;
     //this.productoSeleccionado = this.producto.find(i =>i.id === stock.producto.id)!;
   }

   eliminarkardex(control: Kardex) {
     this.apiService.deleteStock(control.id.toString()).subscribe(() => {
       this.obtenerKardex();
     });
   }

    guardarKardex() {
      this.KardexkDialogo.almacen = this.almacenSeleccionado.id;
      this.KardexkDialogo.unidadMedida = this.medidaSeleccionada.id;
      this.KardexkDialogo.producto = this.productoSeleccionado.id;

      if (this.nuevoKardex) {
        this.apiService.postKardex(this.KardexkDialogo).subscribe(() => {
          console.log("Stock guardado.");
          this.obtenerKardex();
        });
      } else {
        this.apiService.putKardex(this.KardexkDialogo).subscribe(() => {
          console.log("Stock actualizado.");
          this.obtenerKardex();
        });
      }
    }
}

