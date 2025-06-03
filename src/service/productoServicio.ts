// src/app/service/productoServicio.ts
import { Injectable } from '@angular/core';
import { Producto } from '../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class productoServicio {
  constructor() {}

  getProductos(): Promise<Producto[]> {
    return Promise.resolve([
      {
        id: '1',
        name: 'Balón de fútbol',
        description: 'Balón oficial tamaño 5',
        price: 89.99,
        image: 'https://via.placeholder.com/300x200.png?text=Balon'
      },
      {
        id: '2',
        name: 'Zapatillas deportivas',
        description: 'Zapatillas ligeras para correr',
        price: 149.99,
        image: 'https://via.placeholder.com/300x200.png?text=Zapatillas'
      },
      {
        id: '3',
        name: 'Camiseta del equipo',
        description: 'Camiseta oficial temporada 2025',
        price: 59.99,
        image: 'https://via.placeholder.com/300x200.png?text=Camiseta'
      }
    ]);
  }
}
