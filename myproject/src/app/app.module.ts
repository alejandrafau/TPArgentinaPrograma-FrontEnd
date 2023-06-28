import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaDeMiComponent } from './componentes/acerca-de-mi/acerca-de-mi.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
//import { LoginComponent } from './componentes/login/login.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { LoginComponent } from './componentes/login/login.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PortafolioService } from './servicios/portafolio.service';
import { InterceptorService } from './servicios/interceptor.service';
import { JwtserviceService } from './servicios/jwtservice.service';
//import { PortafolioComponent } from './componentes/portafolio/portafolio.component';





@NgModule({
  declarations: [
    AppComponent,
    AcercaDeMiComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProyectosComponent,
    HabilidadesComponent,
    EncabezadoComponent,
    LoginComponent,
    PortafolioComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
   
  ],
  providers: [PortafolioService,{provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true},JwtserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
