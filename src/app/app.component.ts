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
        command: () => this.router.navigate(['/inicio'])
      },
      {
        label: 'Categorias',
        icon: 'pi pi-tags',
        command: () => this.router.navigate(['/categorias'])
      },
      {
        label: 'Tallas',
        icon: 'pi pi-arrows-v',
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
        label: 'Tienda',
        icon: 'pi pi-shopping-bag',
        badge: '3',
        items: [
          {
            label: 'Hombres',
            icon: 'pi pi-male',
            command: () => this.router.navigate(['/installation'])
          },
          {
            label: 'Mujeres',
            icon: 'pi pi-female',
            command: () => this.router.navigate(['/installation'])
          },
          {
            label: 'Niños',
            icon: 'pi pi-users',
            command: () => this.router.navigate(['/installation'])
          },
          {
            label: 'Productos',
            icon: 'pi pi-box',
            command: () => this.router.navigate(['/productos'])
          }
        ]
      },
      {
        label: 'Noticias',
        icon: 'pi pi-megaphone',
        command: () => this.router.navigate(['/noticias'])
      },
      {
        label: 'Partidos',
        icon: 'pi pi-calendar',
        command: () => this.router.navigate(['/partidos'])
      },
      {
        label: 'Historia',
        icon: 'pi pi-book',
        items: [
          {
            label: 'Historias',
            icon: 'pi pi-book',
            command: () => this.router.navigate(['/historias'])
          },
          {
            label: 'Post de Historia',
            icon: 'pi pi-file',
            command: () => this.router.navigate(['/posthistorias'])
          }
        ]
      },
      {
        label: 'Almacenes',
        icon: 'pi pi-warehouse',
        command: () => this.router.navigate(['/almacenes'])
      },
      {
        label: 'Proveedores',
        icon: 'pi pi-truck',
        command: () => this.router.navigate(['/proveedores'])
      },
      {
        label: 'Administradores',
        icon: 'pi pi-users',
        command: () => this.router.navigate(['/administradores'])
      },
      {
        label: 'Tipos Admin',
        icon: 'pi pi-user-edit',
        command: () => this.router.navigate(['/tiposadmin'])
      },
      {
        label: 'Mi cuenta',
        icon: 'pi pi-user',
        command: () => this.router.navigate(['/micuenta'])
      },
      {
        label: 'Cerrar Sesión',
        icon: 'pi pi-sign-out',
        command: () => {
          localStorage.removeItem('token');
          window.location.href = '/login';
        }
      },
      {
        icon: 'pi pi-heart',
        label: '',
        tooltip: 'Favoritos',
        command: () => this.router.navigate(['/favoritos'])
      },
      {
        icon: 'pi pi-shopping-cart',
        label: '',
        tooltip: 'Carrito',
        command: () => this.router.navigate(['/carrito'])
      }
    ];
  }
}
