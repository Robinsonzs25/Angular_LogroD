import { Component } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service'; 

@Component({
  selector: 'app-tipo',
  standalone: true,
  imports: [],
  templateUrl: './tipo.component.html',
  styleUrl: './tipo.component.css'
})
export class TipoComponent {

  mgs:any;
  constructor(private servicioService:ServicioService){}

  registerType(Type:any){
    this.servicioService.saveTipo(Type.value).subscribe({
      next:(data:any)=>{
        this.mgs=data.message
      },
      error:(e)=>{
        debugger
      }
    })
  }
}
