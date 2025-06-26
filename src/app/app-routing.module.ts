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
import { AlmacenComponent } from './almacen/almacen.component';
import { PasarelaComponent } from './pasarela/pasarela.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ProductoComponent } from './producto/producto.component';
import { PromocionComponent } from './promocion/promocion.component';


const routes: Routes = [
    {path: 'login',component:LoginComponent},
    {path: 'inicio',component:HomeComponent, canActivate: [AuthGuard]},
    {path: 'micuenta', component:MiCuentaComponent},

    // VISTA DE ADMINISTRADOR

    // By Kenny
    {path: 'almacenes', component: AlmacenComponent, canActivate: [AuthGuard]},
    {path: 'pasarelas', component: PasarelaComponent, canActivate: [AuthGuard]},
    {path: 'pedidos', component: PedidoComponent, canActivate: [AuthGuard]},
    {path: 'productos', component: ProductoComponent, canActivate: [AuthGuard]},
    {path: 'promociones', component: PromocionComponent, canActivate: [AuthGuard]},

    // By Adler
    {path: 'categorias',component:CategoriasComponent, canActivate: [AuthGuard]},
    {path: 'tallas',component:TallasComponent, canActivate: [AuthGuard]},


    //VISTA DE USUARIO


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
