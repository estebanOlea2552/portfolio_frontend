import { Component, OnInit } from '@angular/core';
import { HabilidadesService } from 'src/app/Service/habilidades.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit{
  habilidad1:any;
  habilidad2:any;
  habilidad3:any;
  habilidad4:any;

  constructor(private habilidadesS: HabilidadesService){}

  ngOnInit(): void {
    this.cargarHabilidad();
  }

  cargarHabilidad():void{
    this.habilidadesS.list().subscribe(
      data => {
        console.log(data);
        this.habilidad1 = data[0];
        this.habilidad2 = data[1];
        this.habilidad3 = data[2];
        this.habilidad4 = data[3]
      }
    )
  }

  delete(id?:number):void{
    if(id != undefined){
      this.habilidadesS.delete(id).subscribe(
        data =>{
          this.cargarHabilidad();
        }, err =>{
          alert("No se puede eliminar este ítem");
        }
      )
    }
  }
}
