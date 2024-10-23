
//PRIMER INTENTO DE CODIGO

/*este index da problemas, si ejecuto el html, el navegador me da problemas con el CORS
estando el CORS instalado en el servidor, y si hago un node index.js, solo me imprime el console.log,
pero los datos que recojo del servidor no me los imprime por consola*/

//async function fetchData() {
    //const response = await fetch('http://localhost:9100/');
    //Los datos que envia el servido se recogeran en data cuando lleguen
    //const data = await response.json();
    
    //console.log(data);/*Entiendo que con el console.log debe de imprimirse por terminal el json que he mandado 
    //desde el servidor, pero no imprime nada, por lo que entiendo que no llega*/
    
    //Me traigo el id del html donde se van a insertar los datos que envio desde el servidor
    //const usuariosContainer = document.getElementById('usuarios1');
    //Aqui sacare los datos metiendolos en un div
    //data.usuarios.forEach(usuario => {
        //const usuarioDiv = document.createElement('div');
        //usuarioDiv.innerText = '${usuario.nombre}, Edad: ${usuario.edad}';
        //usuariosContainer.appendChild(usuarioDiv);
    //});
//}
//SEGUNDO INTENTO DE CODIGO
(async () => {
    await fetch('http://localhost:9100/listas')
        .then(async (datos) => {
            await datos.json().then((datos)=> { //los datos que nos vienen del servidor se coonvierten en JSON
                console.log(datos.usuario);
                let padre = document.getElementById('consulta'); //creamos objeto con el id que indicamos en el html, ahi insertaremos los datos que nos vienen del servidor
                datos.usuario.forEach(element => {//interaccion sobre todos los elementos que contiene datos.usuario
                    let newDiv = padre.firstElementChild.cloneNode(true);//clonamos el primer hijo y su estructura (true)
                    /*toma el primer valor del objeto element, lo convierte en un nodo de texto,
                     lo agregamos a newDiv, y luego ese div se añade al contenedor principal padre*/ 
                    newDiv.appendChild(document.createTextNode(`${Object.values(element)[0]}, ${Object.values(element)[1]}`));//con esto creamos variables para sacar la posicion que queramos del json. template literals ${...}
                    padre.appendChild(newDiv);
                });
                padre.firstElementChild.remove();//borramos el primer hijo, el que clonamos
            }, () => {
                console.log('Error al parsear')
            })
        }, (datos) => {
            console.log(datos);
        })
    })();

console.log('funciona');




