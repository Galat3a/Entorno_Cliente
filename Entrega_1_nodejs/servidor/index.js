const express = require('express');
const app = express();
const path = require('path'); 
const port = 9100;
//apt install cors
const cors = require('cors');

app.use(cors());

app.use(express.static(path.join(__dirname, '../web')));

app.get('/listas', (req, res) => {
  const lista =  {
    usuario: [
      { nombre: "Juan", edad: 34 },
      { nombre: "Ana", edad: 40 },
      { nombre: "Luis", edad: 32 },
      { nombre: "Pablo", edad: 38 }
    ]
  };
  res.json(lista)
}); 
/* si no estuviera en formato json, JSON.stringify() Método en JavaScript se 
utiliza para convertir objetos JavaScript en una cadena JSON.*/

app.listen(port, () => {
  console.log('El servido ' +  port + ' esta listo, adelante!');
});
