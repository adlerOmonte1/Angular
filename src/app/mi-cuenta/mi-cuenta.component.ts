import { Component } from '@angular/core';
import { apiService } from '../../service/api.service';
import { Noticias } from '../../models/noticias.model';

@Component({
  selector: 'app-mi-cuenta',
  standalone: false,
  templateUrl: './mi-cuenta.component.html',
  styleUrl: './mi-cuenta.component.css',
  providers: [apiService]
})
export class MiCuentaComponent {

}
