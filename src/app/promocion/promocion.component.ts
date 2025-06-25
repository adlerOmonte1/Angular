import { Component } from '@angular/core';
import { PromocionService } from '../../service/promocion.service';
import { promocion } from '../../models/promocion.model';

@Component({
  selector: 'app-promocion',
  standalone: false,
  templateUrl: './promocion.component.html',
  styleUrl: './promocion.component.css',
  providers: [PromocionService]
})
export class PromocionComponent {

  constructor(private api: PromocionService) {}

  promociones: promocion[] = [];
  tituloDialogo: string = 'Nueva Promocion';
  visible: boolean = false;

  promocionDialogo: promocion = new promocion();
  nuevaPromocion: boolean = true;

  obtenerPromociones() {
    this.api.getPromocion().subscribe((res) => {
      this.promociones = res;
    });
  }

  ngOnInit() {
    this.obtenerPromociones();
  }

  editarPromocion(promocion: promocion) {
    this.visible = true;
    this.nuevaPromocion = false;
    this.promocionDialogo = promocion;
  }

  eliminarPromocion(promocion: promocion) {
    this.api.deletePromocion(promocion.id.toString()).subscribe(() => {
      this.obtenerPromociones();
    });
  }

  abrirDialogo() {
    this.visible = true;
    this.nuevaPromocion = true;
    this.promocionDialogo = new promocion();
  }

  guardarPromocion() {
    if (this.nuevaPromocion) {
      this.api.postPromocion(this.promocionDialogo).subscribe(res => {
        this.obtenerPromociones();
      });
    } else {
      this.api.putPromocion(this.promocionDialogo).subscribe(res => {
        this.obtenerPromociones();
      });
    }
    this.visible = false;
  }
}
