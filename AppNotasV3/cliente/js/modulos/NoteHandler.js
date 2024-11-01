import { NoteHandlerC } from "./NoteHandlerC.js";

export const NoteHandler = {
    noteHandler: null,
    getInstance: (url) => {
        if (NoteHandler.noteHandler === null) {
            console.log("Instanciando NoteHandlerC con la URL:", url);
            NoteHandler.noteHandler = new NoteHandlerC(url);
        } else {
            console.log("Usando instancia existente de NoteHandlerC");
        }
        return NoteHandler.noteHandler;
    }
};
