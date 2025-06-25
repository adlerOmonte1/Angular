import { Component } from '@angular/core';
import { ProductoService } from '../../service/producto.service';
import { UsuarioService } from '../../service/usuario.service';
import { apiService } from '../../service/api.service';
import { AlmacenService } from '../../service/almacen.service';
import { ProveedorService } from '../../service/proveedor.service';
import { PromocionService } from '../../service/promocion.service';
import { Producto } from '../../models/producto.model';
import { Usuario } from '../../models/usuario.model';
import { Categoria } from '../../models/categoria.model';
import { Almacen } from '../../models/almacen.model';
import { Proveedor } from '../../models/proveedor.models';
import { promocion } from '../../models/promocion.model';

@Component({
  selector: 'app-producto',
  standalone: false,
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
  providers: [ProductoService, UsuarioService, apiService, AlmacenService, ProveedorService, PromocionService]
})
export class ProductoComponent {
  constructor(private productoService: ProductoService, private usuarioService: UsuarioService,
    private apiService: apiService, private almacenService: AlmacenService,
    private proveedorService: ProveedorService, private promocionService: PromocionService) {}

  productos:Producto[];
  visible:boolean = false;
  nuevoProducto:boolean = true;
  productoDialogo:Producto = new Producto();

  usuario:Usuario[];
  usuarioSeleccionado:Usuario;

  categorria: Categoria[];
  categoriaSeleccionada:Categoria;

  almacen: Almacen[];
  almacenSeleccionado:Almacen;

  proveedor: Proveedor[];
  proveedorSeleccionado:Proveedor;

  promocion: promocion[];
  promocionSeleccionada:promocion;

  abrirDialogo(){
    this.visible = true;
  }

  obtenerProductos(){
    this.productoService.getProducto().subscribe(res => {
      this.productos = res;
    });
  }

  obtenerUsuarios(){
    this.usuarioService.getUsuario().subscribe(res => {
      this.usuario = res;
    });
  }

  obtenerCategorias(){
    this.apiService.getCategoria().subscribe(res => {
      this.categorria = res;
    });
  }

  obtenerAlmacenes(){
    this.almacenService.getAlmacen().subscribe(res => {
      this.almacen = res;
    });
  }

  obtenerProveedores(){
    this.proveedorService.getProveedor().subscribe(res => {
      this.proveedor = res;
    });
  }

  obtenerPromociones(){
    this.promocionService.getPromocion().subscribe(res => {
      this.promocion = res;
    });
  }

  ngOnInit(){
    this.obtenerProductos();
    this.obtenerUsuarios();
    this.obtenerCategorias();
    this.obtenerAlmacenes();
    this.obtenerProveedores();
    this.obtenerPromociones();
  }

  editarProducto(producto:Producto){

  }

  eliminarProducto(producto:Producto){

  }

  guardarProducto(){
    this.productoDialogo.usuario = [this.usuarioSeleccionado];
    this.productoDialogo.categoria = [this.categoriaSeleccionada];
    this.productoDialogo.almacen = [this.almacenSeleccionado];
    this.productoDialogo.proveedor = [this.proveedorSeleccionado];
    this.productoDialogo.promocion = [this.promocionSeleccionada];
    if (this.nuevoProducto){
      this.productoService.postProducto(this.productoDialogo).subscribe(res => {
        this.obtenerProductos();
      });
    } else {
      this.productoService.putProducto(this.productoDialogo).subscribe(res => {
        this.obtenerProductos();
      });
    }
    this.visible = false;
  }

  onBasicUploadAuto(event:any){

  }
}
