import { Component } from '@angular/core';
import { ProveedorService } from '../../service/proveedores.service';
import { Proveedores } from '../../models/proveedores.models';

@Component({
  selector: 'app-proveedor',
  standalone: false,
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css'],
  providers: [ProveedorService]
})
export class ProveedoresComponent {
  proveedores: Proveedores[] = []; // Lista de proveedores
  visible: boolean = false; // Controla la visibilidad del modal
  nuevoProveedor: boolean = true; // Determina si se está creando o editando un proveedor
  proveedorDialogo: Proveedores = new Proveedores(); // Objeto proveedor para el diálogo

  constructor(private proveedorService: ProveedorService) {}

  // Abre el modal para agregar o editar proveedor
  abrirDialogo() {
    this.visible = true;
  }

  // Obtener los proveedores desde el servicio
  obtenerProveedores() {
    this.proveedorService.getProveedor().subscribe((res) => {
      this.proveedores = res; // Asignar la lista de proveedores
    });
  }

  // Eliminar proveedor
  eliminarProveedor(proveedor: Proveedores) {
    this.proveedorService.deleteProveedor(proveedor.id.toString()).subscribe(() => {
      this.obtenerProveedores(); // Refrescar la lista después de eliminar
    });
  }

  // Método de inicialización
  ngOnInit() {
    this.obtenerProveedores(); // Cargar los proveedores al iniciar el componente
  }

  // Guardar nuevo proveedor o actualizar
  guardarProveedor() {
  console.log("Guardando proveedor...");
  if (this.nuevoProveedor) {
    // Si es un nuevo proveedor, se hace un POST
    this.proveedorService.postProveedor(this.proveedorDialogo).subscribe(() => {
      console.log("Proveedor guardado.");
      this.obtenerProveedores(); // Refresca la lista después de agregar
    });
  } else {
    // Si ya es un proveedor existente, se hace un PUT
    this.proveedorService.putProveedor(this.proveedorDialogo).subscribe(() => {
      console.log("Proveedor actualizado.");
      this.obtenerProveedores(); // Refresca la lista después de actualizar
    });
  }
  this.visible = false; // Cerrar el modal
}


  // Método para editar proveedor
  editarProveedor(proveedor: Proveedores) {
    this.nuevoProveedor = false; // Indicar que es un proveedor existente
    this.proveedorDialogo = { ...proveedor }; // Copiar los datos del proveedor seleccionado
    this.abrirDialogo(); // Abre el modal para editar
  }

  // Método para cancelar la operación
  cancelar() {
    this.visible = false; // Cerrar el modal
  }
  
}
