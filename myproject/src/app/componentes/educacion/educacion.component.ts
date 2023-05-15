import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/servicios/portafolio.service';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacionList:any;
  constructor (private datosPortafolio:PortafolioService){}

  ngOnInit(): void {
    
    this.datosPortafolio.obtenerDatos().subscribe(data=>{ 
      this.educacionList= data[0].educacion;
      console.log(this.educacionList);
    });
  }
}
