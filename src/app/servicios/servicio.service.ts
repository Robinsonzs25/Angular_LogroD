import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }

  getTipos(){
    return this.http.get('http://localhost:3000/api/tipo')
  }

  saveTipo(type:any){
    debugger
    return this.http.post('http://localhost:3000/api/tipo',
      {
        type:type
      }
    );
  }

  savePersona(Nombre:any, Apellido:any, Cedula:any, Correo:any, Telefono:any, Especialidad:any, typeusers_id:any){
    debugger
    return this.http.post('http://localhost:3000/api/registrar',
      {
        Nombre:Nombre,
        Apellido:Apellido,
        Cedula:Cedula,
        Correo:Correo,
        Telefono:Telefono,
        Especialidad:Especialidad,
        typeusers_id:typeusers_id
      }
    );
  }

}
