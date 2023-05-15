import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/servicios/portafolio.service';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent implements OnInit {
  miPortafolio:any;

  constructor (private datosPortafolio:PortafolioService){}

  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data=>{
    this.miPortafolio=data[0];
    });
  }
}