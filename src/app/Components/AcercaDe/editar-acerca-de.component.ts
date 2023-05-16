import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcercaDe } from 'src/app/Model/acerca-de';
import { AcercaDeServiceService } from 'src/app/Service/acerca-de-service.service';

@Component({
  selector: 'app-editar-acerca-de',
  templateUrl: './editar-acerca-de.component.html',
  styleUrls: ['./editar-acerca-de.component.css']
})
export class EditarAcercaDeComponent implements OnInit{
  acercaDe: AcercaDe = null;

  constructor(private acercaDeS: AcercaDeServiceService, private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.acercaDeS.detail(id).subscribe(
      data => {
        this.acercaDe = data;
      }, err =>{
        alert("Error al editar el encabezado");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.acercaDeS.update(id, this.acercaDe).subscribe(
      data =>{
        alert("Modificación realizada con éxito");
        this.router.navigate(['']);
      }, err =>{
        alert("No se pudo editar el encabezado");
        this.router.navigate(['']);
      }
    )
  }

}
