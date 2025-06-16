import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}





/*
CODIGO HECHO EN CLASE
import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterState, RouterStateSnapshot} from '@angular/router';
import { AuthcService } from './authc.service';
@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private router: Router,private route:ActivatedRoute,private authcServ:AuthcService) {}

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): boolean {
    // const token = localStorage.getItem('token');
    if (this.authcServ.estaLogeado()) {
      return true;
    } else {
      this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}}); // permite
      return false;
    }
  }
}
*/
