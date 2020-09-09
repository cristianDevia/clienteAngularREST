export interface IEstudiante {

    nombre: string;
    cedula: number;
    codigo: string;
    correo: string;
    celular: number;
    fechaNacimiento: Date;
    genero: string;
}

export interface EstudianteResponse{
    Estudiante: Array<IEstudiante>;
}
