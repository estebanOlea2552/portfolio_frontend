import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncabezadoComponent } from './Components/Encabezado/encabezado.component';
import { EditarencabezadoComponent } from './Components/Encabezado/editarencabezado.component';
import { NuevoencabezadoComponent } from './Components/Encabezado/nuevoencabezado.component';
import { EditarAcercaDeComponent } from './Components/AcercaDe/editar-acerca-de.component';
import { AcercaDeComponent } from './Components/AcercaDe/acerca-de.component';
import { EducacionComponent } from './Components/Educacion/educacion.component';
import { EditareducacionComponent } from './Components/Educacion/editareducacion.component';
import { NuevaeducacionComponent } from './Components/Educacion/nuevaeducacion.component';
import { HabilidadesComponent } from './Components/Habilidades/habilidades.component';
import { NuevahabilidadesComponent } from './Components/Habilidades/nuevahabilidades.component';
import { EditarhabilidadesComponent } from './Components/Habilidades/editarhabilidades.component';
import { PortfolioComponent } from './Components/portfolio.component';

const routes: Routes = [
  {path: '', component: PortfolioComponent},
  {path: 'editarencabezado/:id', component: EditarencabezadoComponent},
  {path: 'nuevoencabezado/:id', component: NuevoencabezadoComponent},
  {path: 'editaracercade/:id', component: EditarAcercaDeComponent},
  {path: 'editareducacion/:id', component: EditareducacionComponent},
  {path: 'nuevaeducacion', component: NuevaeducacionComponent},
  {path: 'editarhabilidades/:id', component: EditarhabilidadesComponent},
  {path: 'nuevahabilidades', component: NuevahabilidadesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
