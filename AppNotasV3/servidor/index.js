const express = require('express');
const cors = require('cors');
const path = require('path');                                                   // Para los archivos estáticos
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());                                                        // Para el parseo
app.use(express.static(path.join(__dirname, '../client')));

// Conectar a MongoDB
const mongoURI = 'mongodb+srv://amorvie545:JMgdVvjdLN5OaaZO@clusterprojectnotes.bdebz.mongodb.net/?retryWrites=true&w=majority&appName=ClusterProjectNotes';
mongoose.connect(mongoURI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error de conexión a MongoDB:', err));

// Definir el esquema de la nota
const NoteSchema = new mongoose.Schema({
    tipo: { type: String, required: true },
    contenido: { type: String, required: true },
    fecha: { type: Date, default: Date.now }
});

const Note = mongoose.model('Note', NoteSchema);
// Obtener las notas con el filtrado según el mes
app.get('/notes', async (req, res) => {
    try {
        const { month } = req.query;
        let filter = {};

        if (month) {
            const start = new Date(new Date().getFullYear(), month - 1, 1); // Primer día del mes
            const end = new Date(new Date().getFullYear(), month, 1); // Primer día del siguiente mes
            filter.fecha = { $gte: start, $lt: end };
        }

        const notes = await Note.find(filter);
        res.json(notes);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las notas' });
    }
});

/*Obtener todas las notas
app.get('/notas', async (req, res) => {
    try {
        const notas = await Note.find();
        res.json(notas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener notas' });
    }
});*/

// Crear una nueva nota
app.post('/notas', async (req, res) => {
    try {
        const { tipo, contenido } = req.body;
        const nuevaNota = new Note({ tipo, contenido });
        await nuevaNota.save();
        res.status(201).json(nuevaNota);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear nota' });
    }
});



app.listen(port, () => {
    console.log('Servidor listo en el puerto ' + port);
});
