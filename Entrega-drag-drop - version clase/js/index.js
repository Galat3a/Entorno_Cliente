import { uiCreate } from './uiCreate.js';
import { uiDrag } from './uiDrag.js';

// Crear los contenedores y elementos con un color específico
uiCreate.createElement(".contenedor1", 5, "yellow", "Oros");  // Elementos de color amarillo oro
uiCreate.createElement(".contenedor2", 5, "blue", "Espadas");  // Elementos de color azul espada
uiCreate.createElement(".contenedor3", 5, "green", "Bastos");  // Elementos de color verde bastos
uiCreate.createElement(".contenedor4", 5, "red", "Copas");  // Elementos de color rojo copas

// Inicializar la funcionalidad de arrastrar y soltar
uiDrag.init(".contenedor1", ".elemento");
uiDrag.init(".contenedor2", ".elemento");
uiDrag.init(".contenedor3", ".elemento");
uiDrag.init(".contenedor4", ".elemento");

document.addEventListener('DOMContentLoaded', () => {
    // Verificar el 'palo' de los contenedores
    const contenedores = document.querySelectorAll(".contenedor");
    contenedores.forEach(contenedor => {
        console.log(`Contenedor con id ${contenedor.id} tiene el palo: ${contenedor.dataset.palo}`);
    });

    // Verificar el 'palo' de los elementos
    const elementos = document.querySelectorAll(".elemento");
    elementos.forEach(elemento => {
        console.log(`Elemento con id ${elemento.id} tiene el palo: ${elemento.dataset.palo}`);
    });
    console.log(`Elemento con id ${draggedElement.id} tiene el palo: ${draggedElement.dataset.palo}`);
});