import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/servicios/portafolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  miPortafolio:any;
  


  constructor (private datosPortafolio:PortafolioService){}

  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data=>{
    this.miPortafolio=data[0];

    });
  }
}


