import { Component, OnInit } from '@angular/core';
import { AcercaDeServiceService } from 'src/app/Service/acerca-de-service.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit{
  acercaDe:any;

  constructor(private acercaDeS: AcercaDeServiceService){}

  ngOnInit(): void {
    this.cargarAcercaDe();
  }

  cargarAcercaDe():void{
    this.acercaDeS.list().subscribe(
      data => {
        this.acercaDe = data[0];
      }
    )
  }
}
