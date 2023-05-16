import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/Model/educacion';
import { EducacionService } from 'src/app/Service/educacion.service';

@Component({
  selector: 'app-editareducacion',
  templateUrl: './editareducacion.component.html',
  styleUrls: ['./editareducacion.component.css']
})
export class EditareducacionComponent implements OnInit{
  educacion: Educacion = null;

  constructor(private educacionS: EducacionService, private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionS.detail(id).subscribe(
      data => {
        this.educacion = data;
      }, err =>{
        alert("Error al editar el encabezado");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionS.update(id, this.educacion).subscribe(
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
