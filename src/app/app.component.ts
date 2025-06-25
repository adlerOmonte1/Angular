import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web_udh';

  items: MenuItem[] | undefined;

  value3: string | undefined;

  loggedIn: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {

        this.loggedIn = this.authService.isAuthenticated();

        this.items = [
            {
                label: 'Inicio',
                icon: 'pi pi-home',
                command: () => {
                    this.router.navigate(['/inicio']);
                }
            },

            {
                label: 'Jugadores',
                icon: 'pi pi-home',
                command: () => {
                    this.router.navigate(['/categorias']);
                }
            },

            {
                label: 'Tienda',
                icon: 'pi pi-search',
                badge: '3',
                items: [
                    {
                        label: 'Hombres',
                        icon: 'pi pi-bolt',
                        command: () => {
                          this.router.navigate(['/installation']);
                        }
                    },
                    {
                        label: 'Mujeres',
                        icon: 'pi pi-server',
                        command: () => {
                          this.router.navigate(['/installation']);
                        }
                    },
                    {
                        label: 'Niños',
                        icon: 'pi pi-pencil',
                        command: () => {
                          this.router.navigate(['/installation']);
                        }
                    },
                    {
                        label: 'Productos',
                        icon: 'pi pi-pencil',
                        command: () => {
                          this.router.navigate(['/productos']);
                        }
                    },
                ],
            },

            {
                label: 'Noticias',
                icon: 'pi pi-home',
                command: () => {
                    this.router.navigate(['/noticias']);
                }
            },

            {
                label: 'Partidos',
                icon: 'pi pi-home',
                command: () => {
                    this.router.navigate(['/installation']);
                }
            },

            {
                label: 'Historia',
                icon: 'pi pi-home',
                command: () => {
                    this.router.navigate(['/installation']);
                }
            },

            {
                label: 'Mi cuenta',
                icon: 'pi pi-home',
                command: () => {
                    this.router.navigate(['/micuenta']);
                }
            },
            {
                label: 'Cerrar Sesión',
                icon: 'pi pi-sign-out',
                command: () => {
                  localStorage.removeItem('token'); // Eliminar el token del almacenamiento local
                  window.location.href = '/login';
                }
            },
            {
              icon: 'pi pi-heart',
              label: '',
              tooltip: 'Favoritos',
              command: () => {
                this.router.navigate(['/favoritos']);
              }
            },
            {
              icon: 'pi pi-shopping-cart',
              label: '',
              tooltip: 'Carrito',
              command: () => {
                this.router.navigate(['/carrito']);
              }
            }
        ];
    }
}
