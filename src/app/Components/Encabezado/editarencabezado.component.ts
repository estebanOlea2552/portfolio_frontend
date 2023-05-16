import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Encabezado } from 'src/app/Model/encabezado';
import { EncabezadoService } from 'src/app/Service/encabezado.service';

@Component({
  selector: 'app-editarencabezado',
  templateUrl: './editarencabezado.component.html',
  styleUrls: ['./editarencabezado.component.css']
})
export class EditarencabezadoComponent implements OnInit{
  encabezado: Encabezado = null;

  constructor(private encabezadoS: EncabezadoService, private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.encabezadoS.detail(id).subscribe(
      data => {
        this.encabezado = data;
      }, err =>{
        alert("Error al editar el encabezado");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.encabezadoS.update(id, this.encabezado).subscribe(
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
