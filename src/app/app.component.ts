import { Component } from '@angular/core';
import { IEstudiante } from './estudiante/iestudiante';
import { EstudianteService } from './estudiante/estudiante.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clienteWebJS';

  constructor(private servicioEstudiante: EstudianteService){};

  public agrgarEstudiante(): void{
    const nombre: string = (document.getElementById('txtNombre') as HTMLInputElement).value;
    const cedula: number = parseInt((document.getElementById('txtCedula') as HTMLInputElement).value, 10);
    const codigo: string = (document.getElementById('txtCodigo') as HTMLInputElement).value;
    const correo: string = (document.getElementById('txtCorreo') as HTMLInputElement).value;

    const celular: number = parseInt((document.getElementById('txtCelular') as HTMLInputElement).value, 10);
    const inputFechaNacimiento: string = (document.getElementById('txtFechaNacimiento') as HTMLInputElement).value;
    const fechaNacimiento: Date = new Date(inputFechaNacimiento);

    const generoMasculino: boolean = (document.getElementById('masculino') as HTMLInputElement).checked;
    const generoFemenino: boolean = (document.getElementById('femenino') as HTMLInputElement).checked;
    let genero: string = '';

    if ( generoMasculino === true )
    {
      genero = 'M';
    }
    if ( generoFemenino === true)
    {
      genero = 'F';
    }

    const estu: IEstudiante = {nombre, cedula, codigo, correo, celular, fechaNacimiento, genero};
    this.servicioEstudiante.agregarEstudiante(estu);
  }

}
