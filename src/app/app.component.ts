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
            label: 'Productos',
            icon: 'pi pi-box',
            items: [
              {
                label: 'Categorías',
                icon: 'pi pi-tags',
                command: () => this.router.navigate(['/categorias'])
              },
              {
                label: 'Tallas',
                icon: 'pi pi-sort-size-down',
                command: () => this.router.navigate(['/tallas'])
              },
              {
                label: 'Productos',
                icon: 'pi pi-box',
                command: () => this.router.navigate(['/productos'])
              },
              {
                label: 'Promociones',
                icon: 'pi pi-percentage',
                command: () => this.router.navigate(['/promociones'])
              },
              {
                label: 'Pasarelas',
                icon: 'pi pi-credit-card',
                command: () => this.router.navigate(['/pasarelas'])
              },
              {
                label: 'Almacenes',
                icon: 'pi pi-building',
                command: () => this.router.navigate(['/almacenes'])
              },
              {
                label: 'Proveedores',
                icon: 'pi pi-truck',
                command: () => this.router.navigate(['/proveedores'])
              },
            ]
          },
          {
            label: 'Noticias y Contenido',
            icon: 'pi pi-megaphone',
            items: [
              {
                label: 'Noticias',
                icon: 'pi pi-book',
                command: () => this.router.navigate(['/noticias'])
              },
              {
                label: 'Historias',
                icon: 'pi pi-calendar',
                command: () => this.router.navigate(['/historias'])
              },
              {
                label: 'Post Historia',
                icon: 'pi pi-pencil',
                command: () => this.router.navigate(['/posthistorias'])
              }
            ]
          },
          {
            label: 'Partidos y Jugadores',
            icon: 'pi pi-sitemap',
            items: [
              {
                label: 'Partidos',
                icon: 'pi pi-calendar',
                command: () => this.router.navigate(['/partidos'])
              },
              {
                label: 'Jugadores',
                icon: 'pi pi-users',
                command: () => this.router.navigate(['/jugadores'])
              }
            ]
          },
          {
            label: 'Usuarios y Seguridad',
            icon: 'pi pi-shield',
            items: [
              {
                label: 'Administradores',
                icon: 'pi pi-user-edit',
                command: () => this.router.navigate(['/administradores'])
              },
              {
                label: 'Tipos de Administradores',
                icon: 'pi pi-user-plus',
                command: () => this.router.navigate(['/tiposadmin'])
              }
            ]
          },
          {
            label: 'Mi Cuenta',
            icon: 'pi pi-user',
            command: () => {
              this.router.navigate(['/micuenta']);
            }
          },
          {
            label: 'Cerrar Sesión',
            icon: 'pi pi-sign-out',
            command: () => {
              localStorage.removeItem('token');
              window.location.href = '/login';
            }
          },
        ];
      }
      obtenerBarraHincha(): MenuItem[] {
        return [
        {
            label: 'Inicio',
            icon: 'pi pi-home',
            command: () => this.router.navigate(['/inicio'])
        },
        {
            label: 'Jugadores',
            icon: 'pi pi-users',
            command: () => this.router.navigate(['/jugadoreshincha'])
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
            label: 'Productos',
            icon: 'pi pi-ticket',
            command: () => this.router.navigate(['/pedido'])
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
