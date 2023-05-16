export class Educacion {
    id?:number;
    escuela:string;
    carrera:string

    constructor(escuela:string, carrera:string){
        this.escuela = escuela;
        this.carrera = carrera;
    }
}
