import { Component } from '@angular/core';
import { HinchaService } from '../../service/hincha.service';
import { Hincha } from '../../models/hincha.model';

@Component({
  selector: 'app-vista-hincha',
  standalone: false,
  templateUrl: './vista-hincha.component.html',
  styleUrls: ['./vista-hincha.component.css'],
  providers: [HinchaService]
})
export class VistaHinchaComponent {
  hincha: Hincha = new Hincha();
  visible: boolean = false;

  ngOnInit() {
    this.obtenerPerfilHincha();
  }

  constructor(private hinchaService: HinchaService) {}

  obtenerPerfilHincha() {
  this.hinchaService.getHinchas().subscribe((res) => {
    this.hincha = res[0]; // Usamos el primer hincha del array
  });
}


  editar() {
    this.visible = true;
  }

  guardar() {
    this.hinchaService.updateHincha(this.hincha).subscribe(() => {
      this.visible = false;
      this.obtenerPerfilHincha();
    });
  }
}
