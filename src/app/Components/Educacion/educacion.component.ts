import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/Model/educacion';
import { EducacionService } from 'src/app/Service/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{
  escuela1:any;
  escuela2:any;
  escuela3:any;
  escuela4:any;

  constructor(private educacionS: EducacionService){}

  ngOnInit(): void {
    this.cargarEducacion();
  }

  cargarEducacion():void{
    this.educacionS.list().subscribe(
      data => {
        console.log(data);
        this.escuela1 = data[0];
        this.escuela2 = data[1];
        this.escuela3 = data[2];
        this.escuela4 = data[3]
      }
    )
  }

  delete(id?:number):void{
    if(id != undefined){
      this.educacionS.delete(id).subscribe(
        data =>{
          this.cargarEducacion();
        }, err =>{
          alert("No se puede eliminar este ítem");
        }
      )
    }
  }
}
