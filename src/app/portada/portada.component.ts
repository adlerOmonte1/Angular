import { Component, OnInit } from '@angular/core';
import { imagenServicio } from '../../service/imagenServicio';
import { productoServicio } from '../../service/productoServicio';
import { Producto } from '../../models/Producto';
@Component({
  selector: 'app-portada',
  standalone: false,
  templateUrl: './portada.component.html',
  styleUrl: './portada.component.css'
})
export class PortadaComponent implements OnInit{
  images: any[] =[];
  // Definicion de las propiedades del formulario
  datetime12h: Date[] | undefined;
  datetime24h: Date[] | undefined;
  time: Date[] | undefined;
  hourFormat: number;
  productos: Producto[] | any[] = [];
  responsiveOptions: any[] | undefined;
  constructor(private imagenServicio: imagenServicio, private productService: productoServicio) {
      this.images = [
        {
          itemImageSrc: 'https://www.radionacional.gob.pe/sites/default/files/udh.jpg',
          alt:'Imagen1',
          Title:'Titulo1'
        },
        {
          itemImageSrc: 'https://cdn.futbolperuano.com/sdi/2025/01/24/los-delanteros-de-alianza-universidad-para-la-liga-1-del-2025-1270620.jpg',
          alt: 'Descripción 2',
          title: 'Título 2'
      }
      ]
    }
    ngOnInit(){
        this.productos = [
          {
            id: '1',
            name: 'Balón de fútbol',
            description: 'Balón oficial tamaño 5',
            price: 89.99,
            image: 'https://performancetech.com.pe/wp-content/uploads/2023/03/CAMISETA-DE-ENTRENAMIENTO-UDH-AZUL-1.3.jpg'
          },
          {
            id: '2',
            name: 'Zapatillas deportivas',
            description: 'Zapatillas ligeras para correr',
            price: 149.99,
            image: 'https://performancetech.com.pe/wp-content/uploads/2023/03/CAMISETA-DE-ENTRENAMIENTO-UDH-ROJA-1.2.jpg'
          },
          {
            id: '3',
            name: 'Camiseta del equipo',
            description: 'Camiseta oficial temporada 2025',
            price: 59.99,
            image: 'https://tiendas.gamarra.com.pe/wp-content/uploads/sites/7/nggallery/full-deport-7nov24/Imagen-de-WhatsApp-2024-11-05-a-las-20.42.06_50399285.jpg'
          }
        ];
        this.responsiveOptions = [
              {
                  breakpoint: '1400px',
                  numVisible: 2,
                  numScroll: 1
              },
              {
                  breakpoint: '1199px',
                  numVisible: 3,
                  numScroll: 1
              },
              {
                  breakpoint: '767px',
                  numVisible: 2,
                  numScroll: 1
              },
              {
                  breakpoint: '575px',
                  numVisible: 1,
                  numScroll: 1
              }
          ]
  }

}
