import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent} from './home/home.component';
import { PortadaComponent } from './portada/portada.component';
import { ListaproductosComponent } from './listaproductos/listaproductos.component';
const routes: Routes = [
    {path: 'login',component:LoginComponent},
    {path: 'inicio',component:HomeComponent},
    {path: 'portada', component:PortadaComponent},
    {path: 'productos', component:ListaproductosComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
