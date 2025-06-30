import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Menu } from 'primeng/menu';

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
        const rol = this.authService.getRol();
        if(rol == 'ADMINISTRADOR') {
            this.items = this.obtenerBarraAdmin();
        }else if(rol == 'HINCHA') {
            this.items = this.obtenerBarraHincha();
        }
  }
        obtenerBarraAdmin(): MenuItem[] {
          return [
            {
                label: 'Inicio',
                icon: 'pi pi-home',
                command: () => {
                    this.router.navigate(['/inicio']);
                }
            },

            {
                label: 'Categorias',
                icon: 'pi pi-home',
                command: () => {
                    this.router.navigate(['/categorias']);
                }
            },
            {
                label: 'Tallas',
                icon: 'pi pi-home',
                command: () => {
                    this.router.navigate(['/tallas']);
                }
            },
            {
                label: 'Productos',
                icon: 'pi pi-home',
                command: () => {
                    this.router.navigate(['/productos']);
                }
            },
            {
                label: 'Promociones',
                icon: 'pi pi-home',
                command: () => {
                    this.router.navigate(['/promociones']);
                }
            },
            {
                label: 'Pasarelas',
                icon: 'pi pi-home',
                command: () => {
                    this.router.navigate(['/pasarelas']);
                }
            },
            {
                label: 'Tallas ',
                icon: 'pi pi-home',
                command: () => {
                    this.router.navigate(['/tallas']);
                }
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
                label: 'Almacenes',
                icon: 'pi pi-home',
                command: () => {
                    this.router.navigate(['/almacenes']);
                }
            },
            {
                label: 'Proveedores',
                icon: 'pi pi-home',
                command: () => {
                    this.router.navigate(['/proveedores']);
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
        ]
      }
      obtenerBarraHincha(): MenuItem[] {
        return [
        {
            label: 'Inicio',
            icon: 'pi pi-home',
            command: () => this.router.navigate(['/inicio'])
        },
        {
            label: 'Mi Cuenta',
            icon: 'pi pi-user',
            items: [
            {
                label: 'Perfil',
                icon: 'pi pi-id-card',
                command: () => this.router.navigate(['/micuenta'])
            }
            ]
        },
        {
            label: 'Entradas',
            icon: 'pi pi-ticket',
            command: () => this.router.navigate(['/entradas'])
        },
        {
            label: 'Cerrar Sesión',
            icon: 'pi pi-sign-out',
            command: () => {localStorage.removeItem('token'); // Eliminar el token del almacenamiento local
                  window.location.href = '/login';}
        }
        ];
      }
  }
