import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PeticionesapiService {

  constructor(public http: HttpClient) { }

  // el metodo utiliza de forma directa httpclient 
  GetClientes(url : string)
  {
    return this.http.get(url);
  }
}
