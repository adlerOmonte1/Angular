import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthCService } from '../../service/authc.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers : [AuthCService]
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private auth: AuthCService, private router: Router) {}

  login() {
    this.auth.login(this.username, this.password).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/inicio']).then(() => {
        window.location.reload(); // Para que AppComponent se actualice
      });
      },
      error: () => {
        this.error = 'Credenciales incorrectas';
      }
    });
  }
}

/*
export class LoginComponent {
  //constructor(private router: Router) {}
  constructor(private authcServ:AuthcService){}
  username: string = "";
  password: string = "";
  login(){
    this.authcServ.loginC(this.username,this.password);
  }

  */
  /*
  HECHO POR NOSOTROS
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
    */

