import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  
  url="http://localhost:8080/login";
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    console.log('El servicio de autenticación está corriendo');
    this.currentUserSubject = new BehaviorSubject<any>(
      //localStorage.getItem('token'))
      JSON.parse(sessionStorage.getItem("currentUser") || '{}'))
      
  }
  IniciarSesion(credenciales:any):Observable<any>
{
  
  return this.http.post(this.url,credenciales).pipe(map(data=>{
  sessionStorage.setItem("currentUser",JSON.stringify(data));
  this.currentUserSubject.next(data);
return data;
}
))
}

get UsuarioAutenticado()
{
  return this.currentUserSubject.value;
  }
}