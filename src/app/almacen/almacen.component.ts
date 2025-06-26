import { Component } from '@angular/core';
import { AlmacenService } from '../../service/almacen.service';
import { Almacen } from '../../models/almacen.model';

@Component({
  selector: 'app-almacen',
  standalone: false,
  templateUrl: './almacen.component.html',
  styleUrl: './almacen.component.css',
  providers: [AlmacenService]
})
export class AlmacenComponent {

  constructor(private api: AlmacenService) {}

  almacenes: Almacen[] = [];
  tituloDialogo: string = 'Nuevo Almacen';
  visible: boolean = false;

  almacenDialogo: Almacen = new Almacen();
  nuevaAlmacen: boolean = true;

  obtenerAlmacenes() {
    this.api.getAlmacen().subscribe((res) => {
      this.almacenes = res;
    });
  }

  ngOnInit() {
    this.obtenerAlmacenes();
  }

  editarAlmacen(almacen: Almacen) {
    this.visible = true;
    this.nuevaAlmacen = false;
    this.almacenDialogo = almacen;
  }

  eliminarAlmacen(almacen: Almacen) {
    this.api.deleteAlmacen(almacen.id.toString()).subscribe(() => {
      this.obtenerAlmacenes();
    });
  }

  abrirDialogo() {
    this.visible = true;
    this.nuevaAlmacen = true;
    this.almacenDialogo = new Almacen();
  }

  guardarAlmacen() {
    if (this.nuevaAlmacen) {
      this.api.postAlmacen(this.almacenDialogo).subscribe(res => {
        this.obtenerAlmacenes();
      });
    } else {
      this.api.putAlmacen(this.almacenDialogo).subscribe(res => {
        this.obtenerAlmacenes();
      });
    }
    this.visible = false;
  }
}
