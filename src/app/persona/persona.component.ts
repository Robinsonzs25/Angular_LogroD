import { Component } from '@angular/core';
import { ServicioService } from '../servicios/servicio.service';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {
  
  cat:any

  mgs:any;
  constructor(private servicioService:ServicioService){}

  ngOnInit(): void {
    this.conseguirCat()
  }

  conseguirCat(){
    this.servicioService.getTipos().subscribe({
      next:(datos:any)=>{
        this.cat=datos.type
        console.log(datos)
      },error:(err)=>{
        debugger
        console.log('error:',err)
      }
    })
  }

  registerPersona(Nombre:any, Apellido:any, Cedula:any, Correo:any, Telefono:any, Especialidad:any, typeusers_id:any){
    this.servicioService.savePersona(Nombre.value, Apellido.value, Cedula.value, Correo.value, Telefono.value, Especialidad.value, typeusers_id.value).subscribe({
      next:(data:any)=>{
        this.mgs=data.message
      },
      error:(e)=>{
        debugger
      }
    })
  }

}
