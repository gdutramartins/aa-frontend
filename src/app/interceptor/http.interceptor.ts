import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(private storageService: StorageService) {    
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    

    if (this.storageService.isLoggedIn()) {
      console.log('passei pelo Interceptor com usuário autenticado');
      req = req.clone({
        headers: req.headers.set('Access-Control-Allow-Origin', 'http://localhost:8080'),
        withCredentials: true        
      });
    }
    
    /*const authReq = req.clone({
      headers: req.headers.set('aazCookie', this.storageService.)
      
    });
    return next.handle(authReq);
    */

    return next.handle(req);
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
]; 