import { Component } from '@angular/core';
import { PasarelaService } from '../../service/pasarela.service';
import { Pasarela } from '../../models/pasarela.model';

@Component({
  selector: 'app-formapago',
  standalone: false,
  templateUrl: './formapago.component.html',
  styleUrl: './formapago.component.css',
  providers: [PasarelaService]
})
export class FormapagoComponent {
constructor(private api: PasarelaService) {}

  pasarelas: Pasarela[] = [];
  visible: boolean = false;
  nuevaPasarela: boolean = true;

  obtenerPasarelas() {
    this.api.getPasarela().subscribe((res) => {
      this.pasarelas = res;
    });
  }

  ngOnInit() {
    this.obtenerPasarelas();
  }
}
