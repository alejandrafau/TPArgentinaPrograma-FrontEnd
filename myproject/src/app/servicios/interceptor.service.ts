import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler,HttpInterceptor, HttpRequest,HttpHeaders,HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { AutenticacionService } from './autenticacion.service';
import { JwtserviceService } from './jwtservice.service';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private autenticacionServicio:AutenticacionService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    var currentUser=this.autenticacionServicio.UsuarioAutenticado;
    
    if(currentUser){
      
      req=req.clone({
        setHeaders:{
        Authorization: `Bearer ${currentUser.token}`
        }
        })
        }
        return next.handle(req);
    
  }

   
  }
 
   
  
    
//Algunas ideas de cómo hacer mi propio request


// Make a request with Authorization header








