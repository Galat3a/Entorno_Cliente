# README - Aplicación de Gestión de Notas

## Descripción

Este proyecto es una aplicación para gestionar notas, desarrollada con una API REST en Node.js utilizando Express, y una interfaz web en JavaScript. Permite crear, listar y filtrar notas guardadas en una base de datos MongoDB a través de Mongoose. Las notas se clasifican según su tipo (normal o crítica) y se pueden filtrar por mes de creación.

## Estructura del Proyecto

### Servidor

En la carpeta del servidor, encontrarás:

- **index.js**: 

  Este archivo establece un servidor web utilizando Express y se conecta a una base de datos MongoDB mediante Mongoose. El servidor permite gestionar notas, incluyendo la creación y obtención de notas con la opción de filtrarlas por mes. Utiliza CORS para permitir solicitudes desde diferentes orígenes y maneja las peticiones en formato JSON.

  - **Esquema de la Nota**: Define campos para el tipo, contenido y fecha de creación.
  - **Rutas**: Permiten obtener notas filtradas por mes o crear nuevas notas, respondiendo con los datos correspondientes o con mensajes de error en caso de fallos.
  - **Puerto**: El servidor se ejecuta en el puerto 3000 y se conecta a MongoDB al inicio.

### Cliente

En la carpeta del cliente, encontrarás:

- **index.html**: 

  Este archivo es la interfaz de usuario de la aplicación de gestión de notas. Incluye un formulario para crear nuevas notas, un menú desplegable para filtrar las notas por mes, y un área designada donde se mostrarán las notas. Está enlazado con una hoja de estilos CSS y un script JavaScript.

- **Carpeta js**: Contiene varios módulos que gestionan la lógica de la aplicación.

  - **Note.js**: Define la clase `Note`, que representa una nota en la aplicación.
  
  - **NoteConsumer.js**: Contiene un método para convertir un array de datos en objetos `Note`.
  
  - **NoteHandler.js**: Implementa el patrón Singleton para manejar instancias de `NoteHandlerC`.
  
  - **NoteHandlerC.js**: Se encarga de las operaciones relacionadas con las notas (obtener y crear).
  
  - **ui.js**: Proporciona funciones para actualizar la interfaz de usuario.

- **index.js**: 

  Este es el controlador principal de la aplicación de gestión de notas. Importa el módulo `NoteHandler` y establece la comunicación con la API, permitiendo mostrar y crear notas.

## Problemas Conocidos

### Problemas de Conexión y CORS

- **Error al abrir "http://localhost:3000/notes"**: No se carga el `index.html` correctamente. Es posible que haya un problema en las rutas del servidor.
  
- **CORS**: Al intentar abrir `index.html` directamente, se presentan problemas de CORS, a pesar de tenerlo instalado en el servidor.

- **Error al iniciar el cliente**: Intentar correr `node index.js` en la carpeta del cliente provoca un error debido a la sintaxis de importación de módulos ES6. Se sugiere añadir `"type": "module"` en el `package.json`, aunque esto podría no ser aplicable si el archivo no forma parte de un paquete de Express o npm.

### Sugerencias

1. **Revisar las Rutas del Servidor**: Asegúrate de que las rutas están configuradas correctamente para servir el archivo `index.html`.

2. **Verificar CORS**: Asegúrate de que CORS esté correctamente configurado para permitir las solicitudes desde la interfaz.

3. **Consola de Navegador**: Usa las herramientas de desarrollo del navegador para identificar errores en las peticiones de red.

4. **Documentación**: Revisa la documentación de Express y Mongoose para asegurarte de que la configuración sea la adecuada.

## Instalación y Uso

1. **Clonar el repositorio**:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
