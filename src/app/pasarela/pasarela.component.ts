import { Component } from '@angular/core';
import { PasarelaService } from '../../service/pasarela.service';
import { Pasarela } from '../../models/pasarela.model';

@Component({
  selector: 'app-pasarela',
  standalone: false,
  templateUrl: './pasarela.component.html',
  styleUrl: './pasarela.component.css',
  providers: [PasarelaService]
})
export class PasarelaComponent {

  constructor(private api: PasarelaService) {}

  pasarelas: Pasarela[] = [];
  tituloDialogo: string = 'Nueva Pasarela';
  visible: boolean = false;

  pasarelaDialogo: Pasarela = new Pasarela();
  nuevaPasarela: boolean = true;

  obtenerPasarelas() {
    this.api.getPasarela().subscribe((res) => {
      this.pasarelas = res;
    });
  }

  ngOnInit() {
    this.obtenerPasarelas();
  }

  editarPasarela(pasarela: Pasarela) {
    this.visible = true;
    this.nuevaPasarela = false;
    this.pasarelaDialogo = pasarela;
  }

  eliminarPasarela(pasarela: Pasarela) {
    this.api.deletePasarela(pasarela.id.toString()).subscribe(() => {
      this.obtenerPasarelas();
    });
  }

  abrirDialogo() {
    this.visible = true;
    this.nuevaPasarela = true;
    this.pasarelaDialogo = new Pasarela();
  }

  guardarPasarela() {
    if (this.nuevaPasarela) {
      this.api.postPasarela(this.pasarelaDialogo).subscribe(res => {
        this.obtenerPasarelas();
      });
    } else {
      this.api.putPasarela(this.pasarelaDialogo).subscribe(res => {
        this.obtenerPasarelas();
      });
    }
    this.visible = false;
  }
}
