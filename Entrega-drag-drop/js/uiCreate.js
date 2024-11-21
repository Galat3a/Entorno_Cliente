export const uiCreate = {
    createElement: (contenedorSelector, cantidadElementos, color, palo) => {
        // Encontrar el contenedor en base al selector
        const contenedor = document.querySelector(contenedorSelector);

        if (contenedor) {
            // Asignar el color al contenedor, esto hara que cambiemos un elemento de un contenedor a otro, este se ponga del color predeterminado en el contenedor
            contenedor.dataset.color = color; 
            contenedor.dataset.palo = palo;
            
            // Asegurarse de que el contenedor esté vacío antes de agregar los nuevos elementos
            contenedor.innerHTML = "";  // Limpiar cualquier contenido anterior
            
            // Crear los elementos dentro del contenedor
            for (let i = 0; i < cantidadElementos; i++) {
                const elemento = document.createElement("div");
                elemento.classList.add("elemento");
                elemento.setAttribute("draggable", "true");
                elemento.style.backgroundColor = color;
                
                
                elemento.id = `elemento-${contenedorSelector.slice(1)}-${i + 1}`;  // Asignar un ID único
                elemento.dataset.palo = palo
                contenedor.appendChild(elemento);
            }
        }
    }
};
