import { Component } from '@angular/core';
import { apiService } from '../../service/api.service';
import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearusuario',
  standalone: false,
  templateUrl: './crearusuario.component.html',
  styleUrl: './crearusuario.component.css',
  providers: [apiService]
})
export class CrearusuarioComponent {
  constructor(private apiService: apiService,private router: Router) {}
  usuario: Usuario[];
  crearUsuario: Usuario = new Usuario();
  username: string = '';
  email: string = '';
  password: string = '';

  crearSuperUsuario() {
    if(!this.username || !this.email || !this.password) {
      alert('Por favor, complete todos los campos.');
      return;
    }
    this.crearUsuario.rol = 'hincha';
    this.apiService.postUsuario(this.crearUsuario).subscribe({
      next: () => {
        alert('Usuario creado exitosamente');
        this.router.navigate(['/login']);
    },
      error: (err) => {
          console.error('Error al crear el usuario:', err);
          alert('Error al crear el usuario. Por favor, intente nuevamente.');
        }
      });

  }
  navegarLogin() {
    this.router.navigate(['/login']);
  }


}
