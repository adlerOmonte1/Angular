import { Component } from '@angular/core';
import { ProductoService } from '../../service/producto.service';
import { UsuarioService } from '../../service/usuario.service';
import { apiService } from '../../service/api.service';
import { AlmacenService } from '../../service/almacen.service';
import { ProveedorService } from '../../service/proveedores.service';
import { PromocionService } from '../../service/promocion.service';
import { Producto } from '../../models/producto.model';
import { Usuario } from '../../models/usuario.model';
import { Categoria } from '../../models/categoria.model';
import { Almacen } from '../../models/almacen.model';
import { promocion } from '../../models/promocion.model';
import { Proveedores } from '../../models/proveedores.models';

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
    private proveedorService: ProveedorService, private promocionService: PromocionService) { }

  productos: Producto[];
  visible: boolean = false;
  nuevoProducto: boolean = true;
  productoDialogo: Producto = new Producto();

  imagenSeleccionada: File | null = null;

  usuario: Usuario[];
  usuarioSeleccionado: Usuario;

  categorria: Categoria[];
  categoriaSeleccionada: Categoria;

  almacen: Almacen[];
  almacenSeleccionado: Almacen;

  proveedor: Proveedores[];
  proveedorSeleccionado: Proveedores;

  promocion: promocion[];
  promocionSeleccionada: promocion;

  abrirDialogo() {
    this.visible = true;
    this.nuevoProducto = true;
    this.productoDialogo = new Producto();
  }

  obtenerProductos() {
    this.productoService.getProducto().subscribe(res => {
      this.productos = res;
    });
  }

  obtenerUsuarios() {
    this.usuarioService.getUsuario().subscribe(res => {
      this.usuario = res;
    });
  }

  obtenerCategorias() {
    this.apiService.getCategoria().subscribe(res => {
      this.categorria = res;
    });
  }

  obtenerAlmacenes() {
    this.almacenService.getAlmacen().subscribe(res => {
      this.almacen = res;
    });
  }

  obtenerProveedores() {
    this.proveedorService.getProveedor().subscribe(res => {
      this.proveedor = res;
    });
  }

  obtenerPromociones() {
    this.promocionService.getPromocion().subscribe(res => {
      this.promocion = res;
    });
  }

  ngOnInit() {
    this.obtenerProductos();
    this.obtenerUsuarios();
    this.obtenerCategorias();
    this.obtenerAlmacenes();
    this.obtenerProveedores();
    this.obtenerPromociones();
  }

  editarProducto(producto: Producto) {
    this.visible = true;
    this.nuevoProducto = false;
    this.productoDialogo = producto;
    this.categoriaSeleccionada = this.categorria.find(c => c.id === producto.categoria.id)!;
    this.proveedorSeleccionado = this.proveedor.find(p => p.id === producto.proveedor.id)!;
    this.promocionSeleccionada = this.promocion.find(pr => pr.id === producto.promocion.id)!;
  }

  eliminarProducto(producto: Producto) {
    this.productoService.deleteProducto(producto.id.toString()).subscribe(() => {
      this.obtenerProductos();
    });
  }

  guardarProducto() {
    const formDataProducto = new FormData();
    formDataProducto.append('nombre', this.productoDialogo.nombre);
    formDataProducto.append('descripcion', this.productoDialogo.descripcion);
    formDataProducto.append('precio', this.productoDialogo.precio.toString());
    formDataProducto.append('categoria', this.categoriaSeleccionada.id.toString());
    formDataProducto.append('proveedor', this.proveedorSeleccionado.id.toString());
    formDataProducto.append('promocion', this.promocionSeleccionada.id.toString());

    if (this.imagenSeleccionada) {
      formDataProducto.append('imagen_url', this.imagenSeleccionada);
    }
    if (this.nuevoProducto) {
      this.productoService.postProductoConImagen(formDataProducto).subscribe(res => {
        this.obtenerProductos();
        this.visible = false;
      });
    } else {
      this.productoService.putProductoConImagen(formDataProducto, this.productoDialogo.id.toString()).subscribe(res => {
        this.obtenerProductos();
        this.visible = false;
      });
    }
  }
  onBasicUploadAuto(event: any) {
    this.imagenSeleccionada = event.files[0];
  }
}
