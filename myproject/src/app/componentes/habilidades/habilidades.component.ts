
import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/servicios/portafolio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

miPortafolio:any;
  


constructor (private datosPortafolio:PortafolioService){}

ngOnInit(): void {
  this.datosPortafolio.obtenerDatos().subscribe(data=>{console.log(data);
  this.miPortafolio=data;
  });
}
}