import { Component, OnInit } from '@angular/core';
import { imagenServicio } from '../../service/imagenServicio';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  images: any[] =[];
  // Definicion de las propiedades del formulario
  name: string = '';
  email: string = '';
  password: string = '';
  accept: boolean = false;
  constructor(private imagenServicio: imagenServicio){
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
  }


}
