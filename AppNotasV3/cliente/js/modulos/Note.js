// Note.js
export class Note {
    constructor(tipo, contenido, fecha) {
        this.tipo = tipo;
        this.contenido = contenido;
        this.fecha = new Date(fecha);
    }
}
