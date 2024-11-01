APPNOTESV3

Este proyecto es una aplicación para gestionar notas, desarrollada con una API REST en Node.js utilizando Express, y una interfaz web en JavaScript. Permite crear, listar y filtrar notas guardadas en una base de datos MongoDB a través de Mongoose. Las notas se clasifican según su tipo (normal o crítica) y se pueden filtrar por mes de creación.

En las carpetas del proyecto vamos a encontrar lo siguiente:
1. El el Servidor, encontraremos index.js: 

Este archivo index.js establece un servidor web utilizando Express y se conecta a una base de datos MongoDB mediante Mongoose. El servidor permite gestionar notas, incluyendo la creación y obtención de notas con la opción de filtrarlas por mes. Utiliza CORS para permitir solicitudes desde diferentes orígenes y maneja las peticiones en formato JSON.

El esquema de la nota se define con campos para el tipo, contenido y fecha de creación. Las rutas del servidor permiten obtener notas filtradas por mes o crear nuevas notas, respondiendo con los datos correspondientes o con mensajes de error en caso de fallos. El servidor se ejecuta en el puerto 3000, y al iniciar se conecta a MongoDB, mostrando un mensaje en la consola si la conexión es exitosa.

2. En el Cliente encontraremos lo siguiente. 

2.1. index.html 

El archivo index.html es la interfaz de usuario de una aplicación de gestión de notas. Está estructurado con HTML y contiene un formulario que permite a los usuarios crear nuevas notas especificando su tipo (normal o crítica) y su contenido. Además, incluye un menú desplegable para filtrar las notas según el mes de creación, proporcionando una forma sencilla de organizar y visualizar las notas almacenadas.

En la sección del cuerpo del documento, se encuentran elementos como un encabezado que titula la aplicación y un área designada (<section id="notaLista">) donde se mostrarán las notas. El archivo también enlaza una hoja de estilos CSS para mejorar su presentación y un script JavaScript que maneja la lógica de la aplicación. Esto permite una interacción dinámica, como el envío de notas al servidor y la actualización de la lista de notas filtradas en la interfaz.

2.2. Carpeta js

En ella encontraremos principalmente una carpeta llamada módulos en la cual tendremos varios archivos .js, los cuales paso a continuación a mencionar:

-Note.js

Este archivo define la clase Note, que representa una nota en la aplicación. Su constructor acepta tres parámetros: tipo, contenido y fecha. Al crear una instancia de Note, se asignan estos valores a las propiedades correspondientes, y la fecha se convierte en un objeto Date. 

-NoteConsumer.js

Su método estático consum recibe un array de datos y utiliza el constructor de Note para crear y devolver un nuevo array de objetos Note. Esta clase actúa como un adaptador, facilitando la conversión de datos recibidos de una API en objetos que la aplicación puede manipular más fácilmente.

-NoteHandler.js

El objeto NoteHandler gestiona la instancia de la clase NoteHandlerC. Su método getInstance asegura que solo haya una instancia de NoteHandlerC, creando una nueva solo si es necesario. Esto implementa el patrón Singleton, permitiendo un acceso controlado a las funciones relacionadas con el manejo de notas, y facilita la configuración inicial con una URL.

-NoteHandlerC.js

La clase NoteHandlerC se encarga de realizar las operaciones relacionadas con las notas, como obtener todas las notas y crear nuevas notas. Sus métodos getAllNotes y createNote utilizan fetch para hacer peticiones a la API, manejando las respuestas y errores adecuadamente. Estos métodos permiten a la aplicación comunicarse con el servidor, recuperar notas filtradas por mes y enviar nuevas notas, utilizando callbacks para gestionar los resultados.

-ui.js

El objeto UI proporciona funciones para actualizar la interfaz de usuario. En particular, su método drawNotes toma un array de notas y un elemento del DOM, limpiando el contenido previo y añadiendo un nuevo div por cada nota. Esto permite que la aplicación muestre dinámicamente la lista de notas en la interfaz, facilitando la visualización de la información de cada nota (tipo, contenido y fecha).

Fuera de la carpeta módulos, encontramos el index.js que sera el script que se maneje en el html: 

El archivo index.js es el controlador principal de la aplicación de gestión de notas. Importa el módulo NoteHandler, que se encarga de comunicarse con la API. Se establece la URL del servidor y se seleccionan los elementos del DOM necesarios para mostrar las notas y el filtro de mes.

La función mostrarNotas obtiene las notas de la API, aplicando un filtro por mes, y actualiza la lista en la interfaz. Al cargar la página, se llaman a las notas para que el usuario las vea de inmediato, pudiendo decidir verlas todas o por un mes en específico.

Además, se maneja el envío del formulario para crear nuevas notas. Cuando el usuario envía el formulario, se evita que la página se recargue y se envía la nueva nota al servidor. Si la creación es exitosa, se actualiza la lista para mostrar la nueva nota y se limpia el campo de texto. En resumen, este archivo conecta la lógica de la aplicación con la interfaz de usuario, permitiendo crear y mostrar notas de forma interactiva.

NOTA IMPORTANTE.

No me funciona correctamente la API, la conexión con la base de datos y el servidor me los hace perfectamente, pero cuando intento abrir "http://localhost:3000/notes" no me abre el index.html. He buscado como solucionarlo y no consigo nada que me lo arregle, por lo que no puedo comprobar si la API REST funciona correctamente. Al intentar abrir directamente el html.index, me da problemas con las CORS aunque lo tenga instalado en el servidor, y al abrir el proyecto a traves del localhost:3000/notes me da un error que no se solucionar. Quizás el error está al crear la instancia en el NoteHandler.js, por ello, he intentado hacerlo sin crear la instancia y haciendo "new NotesHandler('http://localhost:3000/notes');" directamente en el index.js y tampoco me funciona. Por lo que puedo comprobar, el index.js no hace la instancia con el servidor por lo que me muestra una ventana vacia el navegador. No hay conexion entre servidor-cliente.
He intentado hacer un node index.js del cliente para ver si me imprimia por terminal un console.log y me da error, según he podido investigar, el error se debe a que estoy intentando usar la sintaxis de importación de módulos ES6 (import) en un archivo que Node.js no reconoce como un módulo ES. Me dan como solucion añadir en el package.json "type": "module", pero este .js está aislado y no pertenece a ningun paquete express, ni npm... como es el caso del servidor.

Le he dado bastantes vueltas y no consigo ver que puede pasar, me falta base para poder detectar lo que me está ocurriendo. 


