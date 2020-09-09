import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { IEstudiante } from './iestudiante';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private servicioHttp: HttpClient) { }

  public agregarEstudiante(estudiante: IEstudiante): Observable<any> {
    return this.servicioHttp.post('', estudiante);
  }

  public eliminarEstudiante(codigo: number): void {
    this.servicioHttp.post('', codigo);
  }

  public actualizarEstudiante(codigo: string): void {
    this.servicioHttp.put('', codigo);
  }

  public buscarEstudiante(codigo: string): Observable<any> {
    return this.servicioHttp.get('');
  }

  public listarEstudiantes(): Observable<any> {
    return this.servicioHttp.get('');
  }
}
