import { Component } from '@angular/core';
import { apiService } from '../../service/api.service';
import { UnidadMedida } from '../../models/unidadmedida';

@Component({
  selector: 'app-tallas',
  standalone: false,
  templateUrl: './tallas.component.html',
  styleUrl: './tallas.component.css',
  providers: [apiService]
})
export class TallasComponent {
  constructor(private apiService:apiService){ }
  unidadMedida:UnidadMedida[] // en mi variable unidadMedida asignare a mi modelo que es un array
  visible : boolean = false; // declarando mi variable visible para mostrar el modal.
  tituloDialogo : string = "Agregar Nueva Medida";
  talla: UnidadMedida = new UnidadMedida()
  crearTalla: boolean = true;
  obtenerTallas(){
    this.apiService.getTallas().subscribe(res=>{
      this.unidadMedida = res
    }) // obtengo la lista de todas mis tallas de mi backend
  }
  ngOnInit(){
    this.obtenerTallas();
  }

  abrirModal(){
    this.visible = true;
    this.crearTalla = true;
    this.talla = new UnidadMedida();
    this.tituloDialogo;
  }
  editarTalla(unidadMedida : UnidadMedida){
    this.visible = true;
    this.crearTalla = false; // Para diferenciar el metodo.
    this.tituloDialogo = "Editar Unidad de Medida"; // cambiar el titulo de mi modal
    this.talla = unidadMedida; // Almacena los cambios y define mi objeto por editar

  }
  eliminarTalla(unidadMedida: UnidadMedida){
    this.apiService.deleteTallas(unidadMedida.id.toString()).subscribe(()=>this.obtenerTallas());
  }
  guardar(){
    if(this.crearTalla){
      this.apiService.postTallas(this.talla).subscribe(res=>{
        this.obtenerTallas();
      })
    }else {
      this.apiService.putTallas(this.talla).subscribe(res=>{
        this.obtenerTallas();
      })
    }
    this.visible=false;
  }
  

}
