import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/Model/educacion';
import { EducacionService } from 'src/app/Service/educacion.service';

@Component({
  selector: 'app-nuevaeducacion',
  templateUrl: './nuevaeducacion.component.html',
  styleUrls: ['./nuevaeducacion.component.css']
})
export class NuevaeducacionComponent implements OnInit{  
  escuela:string;
  carrera:string;

  constructor(private educacionS: EducacionService, private router: Router){}

  ngOnInit(): void {
    
  }

  onCreate():void{
    const educacion = new Educacion(this.escuela, this.carrera)
    this.educacionS.save(educacion).subscribe(
      data =>{
        alert("Ítem añadido correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("No se pudo añadir el ítem");
        this.router.navigate(['']);
      }
    )
  }
}
