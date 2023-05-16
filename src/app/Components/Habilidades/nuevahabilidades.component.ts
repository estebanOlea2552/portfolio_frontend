import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/Model/habilidades';
import { HabilidadesService } from 'src/app/Service/habilidades.service';

@Component({
  selector: 'app-nuevahabilidades',
  templateUrl: './nuevahabilidades.component.html',
  styleUrls: ['./nuevahabilidades.component.css']
})
export class NuevahabilidadesComponent implements OnInit{
  nombre:string;
  valor:string;

  constructor(private habilidadesS: HabilidadesService, private router: Router){}

  ngOnInit(): void {
    
  }

  onCreate():void{
    const habilidades = new Habilidades(this.nombre, this.valor);
    this.habilidadesS.save(habilidades).subscribe(
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
