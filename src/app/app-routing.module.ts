import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent} from './home/home.component';
import { AuthGuard } from '../service/auth.guard';
import { MiCuentaComponent } from './mi-cuenta/mi-cuenta.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { TallasComponent } from './tallas/tallas.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { AlmacenesComponent } from './almacenes/almacenes.component';
const routes: Routes = [
    {path: 'login',component:LoginComponent},
    {path: 'inicio',component:HomeComponent, canActivate: [AuthGuard]},
    {path: 'micuenta', component:MiCuentaComponent},
    {path: 'categorias',component:CategoriasComponent},
    {path: 'noticias', component:NoticiasComponent},
    {path: 'tallas',component:TallasComponent},
    {path: 'proveedores', component:ProveedoresComponent},
    {path: 'almacenes',component:AlmacenesComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
