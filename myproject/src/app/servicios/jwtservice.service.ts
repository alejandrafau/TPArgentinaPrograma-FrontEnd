import { Injectable } from '@angular/core';
import jwtDecode, {JwtDecodeOptions} from 'jwt-decode' ;

@Injectable({
  providedIn: 'root'
})
export class JwtserviceService {

  constructor() { }
  DecodeToken(token: string)  {
    return jwtDecode(token);

    }
}
