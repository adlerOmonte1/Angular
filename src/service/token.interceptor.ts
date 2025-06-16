import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('token');

    // No agregar token si es la URL de login
    if (token && !req.url.includes('/api/login/')) {
      req = req.clone({
        setHeaders: {
          Authorization: `Token ${token}`,
          'x-api-key': 'Z49FUBWBuBxJHbsBNfeHO0aC6vzAEl8W'
        }
      });
    }

    if (req.url.includes('/api/login/')) {
        req = req.clone({
          setHeaders: {
            'x-api-key': 'Z49FUBWBuBxJHbsBNfeHO0aC6vzAEl8W'
          }
        });
      }

    return next.handle(req);
  }
}
