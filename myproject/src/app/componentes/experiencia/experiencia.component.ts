import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/servicios/portafolio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  experienciaList:any;
  constructor (private datosPortafolio:PortafolioService){}

  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data=>{
    this.experienciaList=data[0].experiencia;
    });
  }
}


