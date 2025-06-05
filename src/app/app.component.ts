import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit() {
        this.items = [
            {
                label: 'Inicio',
                icon: 'pi pi-home',
                command: () => {
                    this.router.navigate(['/portada']);
                }
            },

            {
                label: 'Jugadores',
                icon: 'pi pi-home',
                command: () => {
                    this.router.navigate(['/installation']);
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
                    this.router.navigate(['/installation']);
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
                    this.router.navigate(['/inicio']);
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
