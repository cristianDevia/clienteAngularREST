export interface IMatricula {

    numeroMatricula: number;
    fechaMatricula: Date;
    valor: number;
    numeroCreditos: number;
    PPA: number;
    cedulaEstudiante: number;
    codigoEstudiante: string;
    programa: string;
}

export interface MatriculaResponse{
    Matricula: Array<IMatricula>;
}
