import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  username: string = "";
  password: string = "";

  constructor(private router: Router) {}

  login() {
    if (this.username && this.password) {
      // Simula autenticación
      localStorage.setItem('token', 'DESARROLLOWEB');

      // Redirige a inicio
      this.router.navigate(['/inicio']).then(() => {
        window.location.reload(); // Para que AppComponent se actualice
      });
    } else {
      alert("Por favor completa todos los campos.");
    }
  }
}
