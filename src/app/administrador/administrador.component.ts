// src/app/components/administrador/administrador.component.ts
import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../../service/administrador.service';
import { administrador } from '../../models/administrador.model';

@Component({
  selector: 'app-administrador',
  standalone: false,
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  administradores: administrador[] = [];
  administradorDialog: administrador = {} as administrador;
  nuevaAdministracion: boolean = true;
  visible: boolean = false;
  tituloDialogo: string = 'Nuevo Administrador';

  constructor(private administradorService: AdministradorService) {}

  ngOnInit(): void {
    this.obtenerAdministradores();
  }

  obtenerAdministradores(): void {
    this.administradorService.getAdministradores().subscribe((res) => {
      this.administradores = res;
    });
  }

  abrirDialogo(): void {
    this.visible = true;
    this.nuevaAdministracion = true;
    this.administradorDialog = {} as administrador;
  }

  editarAdministrador(administrador: administrador): void {
    this.visible = true;
    this.nuevaAdministracion = false;
    this.administradorDialog = { ...administrador };
  }

  eliminarAdministrador(administrador: administrador): void {
    this.administradorService.deleteAdministrador(administrador.id).subscribe(() => {
      this.obtenerAdministradores();
    });
  }

  guardarAdministrador(): void {
    if (this.nuevaAdministracion) {
      this.administradorService.postAdministrador(this.administradorDialog).subscribe(() => {
        this.obtenerAdministradores();
      });
    } else {
      this.administradorService.putAdministrador(this.administradorDialog).subscribe(() => {
        this.obtenerAdministradores();
      });
    }
    this.visible = false;
  }
}
