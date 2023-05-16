import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EncabezadoComponent } from './Components/Encabezado/encabezado.component';
import { NuevoencabezadoComponent } from './Components/Encabezado/nuevoencabezado.component';
import { EditarencabezadoComponent } from './Components/Encabezado/editarencabezado.component';
import { AcercaDeComponent } from './Components/AcercaDe/acerca-de.component';
import { EditarAcercaDeComponent } from './Components/AcercaDe/editar-acerca-de.component';
import { EducacionComponent } from './Components/Educacion/educacion.component';
import { EditareducacionComponent } from './Components/Educacion/editareducacion.component';
import { NuevaeducacionComponent } from './Components/Educacion/nuevaeducacion.component';
import { HabilidadesComponent } from './Components/Habilidades/habilidades.component';
import { EditarhabilidadesComponent } from './Components/Habilidades/editarhabilidades.component';
import { NuevahabilidadesComponent } from './Components/Habilidades/nuevahabilidades.component';
import { PortfolioComponent } from './Components/portfolio.component';
import { TopbarComponent } from './Components/topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    NuevoencabezadoComponent,
    EditarencabezadoComponent,
    AcercaDeComponent,
    EditarAcercaDeComponent,
    EducacionComponent,
    EditareducacionComponent,
    NuevaeducacionComponent,
    HabilidadesComponent,
    EditarhabilidadesComponent,
    NuevahabilidadesComponent,
    PortfolioComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
