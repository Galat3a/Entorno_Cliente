// NoteConsumer.js
import { Note } from './Note.js';

export class NoteConsumer {
    static consum(data) {
        return data.map(nota => new Note(nota.tipo, nota.contenido, nota.fecha));
    }
}