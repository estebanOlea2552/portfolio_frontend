export class Encabezado {
    id: number;
    portada: string;
    perfil: string;
    nombre: string;
    descripcion: string;
    residencia: string;

    constructor(id: number, portada:string, perfil:string, nombre:string, descripcion:string, residencia:string){
        this.id = id;
        this.portada = portada;
        this.perfil = perfil;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.residencia = residencia;
    }
}
