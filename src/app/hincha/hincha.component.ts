import { Component, OnInit } from '@angular/core';
import { HinchaService } from '../../service/hincha.service';
import { Hincha } from '../../models/hincha.model';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-hincha',
  standalone: false,
  templateUrl: './hincha.component.html',
  styleUrl: './hincha.component.css',
  providers: [HinchaService]
})
export class HinchaComponent {
  hinchas: Hincha[] = [];

  constructor(private hinchaService: HinchaService) {}

  usuarios: Usuario[]=[]

  ngOnInit(): void {
    this.obtenerHinchas();
  }

  obtenerHinchas(): void {
    this.hinchaService.getHinchas().subscribe(data => {
      this.hinchas = data;
    });
  }
}
