import { Component, OnInit } from '@angular/core';
import { EncabezadoService } from 'src/app/Service/encabezado.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  encabezado:any;

  constructor(private encabezadoS: EncabezadoService){}

  ngOnInit(): void {
    this.cargarEncabezado();   
  }

  cargarEncabezado():void{
    this.encabezadoS.list().subscribe(
      data => {
        this.encabezado = data[0];
      }
    )
  }
}
