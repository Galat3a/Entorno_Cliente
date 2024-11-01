import { NoteHandler } from './modulos/NoteHandler.js';

const url = "http://localhost:3000/notes"; 
const noteHandler = NoteHandler.getInstance(url);

const notesListElement = document.getElementById('notaLista');
const monthFilter = document.getElementById('filtroMes');


// Función para mostrar notas con el filtrado
function mostrarNotas(notas) {
    const month = monthFilter.value;
    NoteHandler.getAllNotes(month, (notes) => {
        NotesConsumer.consume(notes, notesListElement);
    }, (error) => {
        console.error("Error al obtener las notas:", error);
    });
}
// Obtener todas las notas al cargar
noteHandler.getAllNotes(mostrarNotas, error => console.error(error));

// Envío del formulario de nuevas notas
document.getElementById('formNuevaNota').addEventListener('submit', async (event) => {
    event.preventDefault();
    const tipo = document.getElementById('tipoNota').value;
    const contenido = document.getElementById('contenidoNota').value;
    
    await noteHandler.createNote(tipo, contenido, (nuevaNota) => {
        mostrarNotas([nuevaNota]); // Mostrar solo la nueva nota
        document.getElementById('contenidoNota').value = ''; // Limpiar el campo
    }, error => console.error(error));
});

console.log("hola hola");