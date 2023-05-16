import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/Model/habilidades';
import { HabilidadesService } from 'src/app/Service/habilidades.service';

@Component({
  selector: 'app-editarhabilidades',
  templateUrl: './editarhabilidades.component.html',
  styleUrls: ['./editarhabilidades.component.css']
})
export class EditarhabilidadesComponent implements OnInit {
  habilidades: Habilidades = null;

  constructor(private habilidadesS: HabilidadesService, private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.habilidadesS.detail(id).subscribe(
      data => {
        this.habilidades = data;
      }, err =>{
        alert("Error al editar el encabezado");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.habilidadesS.update(id, this.habilidades).subscribe(
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
