export const UI = {
    drawNotes: (notes, elementDiv) => {
        elementDiv.innerHTML = ''; // Limpia la lista antes de agregar
        notes.forEach(note => {
            const noteDiv = document.createElement('div');
            noteDiv.innerText = `Tipo: ${note.tipo}, Contenido: ${note.contenido}, Fecha: ${new Date(note.fecha).toLocaleString()}`;
            elementDiv.appendChild(noteDiv);
        });
    }
};
