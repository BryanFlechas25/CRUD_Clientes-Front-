import { Component } from '@angular/core';
import {Cliente} from './models/cliente';
import {PeticionesapiService} from'./servicios/peticionesapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public clientes: Array<Cliente>;
  public cliente: any;
  public url: string;
  constructor(public _peticiones : PeticionesapiService)
  {
    this.url='http://localhost:9139/api/Cliente';
  }

  ngOnInit() {
    // uso de la funcion creada en la carpeta services el susbcribe se emplea como un callback en js
    this._peticiones.GetClientes(this.url).subscribe(
      data => 
      { 
        this.cliente = data;
      },
      error =>
      {
        var errorMessage = <any>error;
        console.log(errorMessage);
      })
  }
}


