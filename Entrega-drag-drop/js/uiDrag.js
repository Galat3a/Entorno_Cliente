export const uiDrag = {
    init: (selectorContenedor, selectorElemento) => {
        // Manejar el evento drop en los contenedores
        document.querySelectorAll(selectorContenedor).forEach((contenedor) => {
            contenedor.addEventListener("drop", (event) => {
                event.preventDefault();  // Evitar el comportamiento por defecto

                const data = JSON.parse(event.dataTransfer.getData("text"));
                const draggedElement = document.getElementById(data.id);
                
                // Obtener el color del contenedor de destino
                const nuevoColor = event.target.dataset.color; 
                

                // Cambiar el color del elemento al color del contenedor
                draggedElement.style.backgroundColor = nuevoColor;
                draggedElement.dataset.palo = event.target.dataset.palo; 
                
                // Aquí es donde colocamos el console.log para verificar el palo
                console.log(`El elemento ha sido soltado en el contenedor con palo: ${event.target.dataset.palo}`);
                console.log(`Elemento con ID: ${draggedElement.id} tiene el palo: ${draggedElement.dataset.palo}`);


                const rect = event.target.getBoundingClientRect();
                const offsetX = event.clientX - rect.left;
                const offsetY = event.clientY - rect.top;

                // Colocar el elemento arrastrado dentro del contenedor en la posición correcta
                draggedElement.style.position = "absolute";
                draggedElement.style.left = `${offsetX - (draggedElement.offsetWidth / 2)}px`;
                draggedElement.style.top = `${offsetY - (draggedElement.offsetHeight / 2)}px`;

                // Asegurarse de que el contenedor contenga el elemento arrastrado
                if (!event.target.contains(draggedElement)) {
                    event.target.appendChild(draggedElement);
                }
            });

            contenedor.addEventListener("dragover", (event) => {
                event.preventDefault();  // Necesario para permitir el "drop"
            });
        });

        // Hacer los elementos arrastrables
        document.querySelectorAll(selectorElemento).forEach((item) => {
            item.addEventListener("dragstart", (event) => {
                const sendData = {
                    id: event.target.id,  // Enviar el ID del elemento arrastrado
                    color: event.target.style.backgroundColor  // Guardar el color del elemento arrastrado
                };
                event.dataTransfer.setData("text", JSON.stringify(sendData));
            });
        });
    }
};
