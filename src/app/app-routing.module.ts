import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent} from './home/home.component';
import { AuthGuard } from '../service/auth.guard';
import { CategoriasComponent } from './categorias/categorias.component';
import { TallasComponent } from './tallas/tallas.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { AlmacenComponent } from './almacen/almacen.component';
import { PasarelaComponent } from './pasarela/pasarela.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ProductoComponent } from './producto/producto.component';
import { PromocionComponent } from './promocion/promocion.component';

import { HistoriaComponent } from './historias/historias.component';
import { ProductohinchaComponent } from './productohincha/productohincha.component';
import { JugadorHinchaComponent } from './jugador-hincha/jugador-hincha.component';
import { FormapagoComponent } from './formapago/formapago.component';
import { StockComponent } from './stock/stock.component';
import { TiposadminComponent } from './tiposadmin/tiposadmin.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { JugadorComponent } from './jugador/jugador.component';
import { HinchaComponent } from './hincha/hincha.component';
import { VistaHinchaComponent } from './vista-hincha/vista-hincha.component';
import { CategoriaHinchaComponent } from './vistacategoria/vistacategoria.component';
import { KardexComponent } from './kardex/kardex.component';
import { UsuarioComponent } from './usuarios/usuarios.component';
import { CrearusuarioComponent } from './crearusuario/crearusuario.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PartidoComponent } from './partidos/partidos.component';
import { NoticiaComponent } from './noticias/noticias.component';
import { PosthistoriasComponent } from './post-historia/post-historia.component';



const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registrarse', component: CrearusuarioComponent },
    { path: 'inicio', component: HomeComponent },

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
    { path: 'stock',component:StockComponent,canActivate:[AuthGuard]},
    { path: 'kardex', component: KardexComponent, canActivate: [AuthGuard] }, // Asumiendo que el componente Kardex es el mismo que Stock
    { path: 'perfil', component:PerfilComponent, canActivate: [AuthGuard] },
    // By kennet

    {path: 'partidos',component:PartidoComponent, canActivate: [AuthGuard]},
    {path: 'historias',component:HistoriaComponent, canActivate: [AuthGuard]},
    {path: 'noticias',component:NoticiaComponent, canActivate: [AuthGuard]},
    {path: 'post-historias',component:PosthistoriasComponent, canActivate: [AuthGuard]},
    
    


    // By Sidanne
    {path: 'proveedores', component: ProveedoresComponent, canActivate: [AuthGuard]},
    {path: 'administradores', component: AdministradorComponent, canActivate: [AuthGuard]},
    {path: 'tiposadmin', component: TiposadminComponent, canActivate: [AuthGuard]},
    {path: 'jugadores', component: JugadorComponent, canActivate: [AuthGuard]},
    {path: 'hinchas', component: HinchaComponent, canActivate: [AuthGuard]},
    {path: 'usuarios', component: UsuarioComponent, canActivate: [AuthGuard]},

    //VISTA DE USUARIO
    {path: 'jugadoreshincha', component: JugadorHinchaComponent, canActivate: [AuthGuard]},
    {path: 'pedido',component:ProductohinchaComponent, canActivate: [AuthGuard]},
    {path: 'formapago',component:FormapagoComponent, canActivate: [AuthGuard]},

    //VISTA DE SIDANE
    {path: 'vistahinchas', component: VistaHinchaComponent, canActivate: [AuthGuard]},
    {path: 'vistacategoria', component: CategoriaHinchaComponent, canActivate: [AuthGuard]}




  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
