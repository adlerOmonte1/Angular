import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent} from './home/home.component';
import { AuthGuard } from '../service/auth.guard';
const routes: Routes = [
    {path: 'login',component:LoginComponent},
    {path: 'inicio',component:HomeComponent, canActivate: [AuthGuard]},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
