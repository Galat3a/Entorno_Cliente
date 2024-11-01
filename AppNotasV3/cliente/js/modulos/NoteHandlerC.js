export class NoteHandlerC {
    constructor(url) {
        this._url = url; // Guarda la URL para las peticiones
    }

    async getAllNotes(month, onSuccess, onError) {
        const url = month ? `${this._url}?month=${month}` : this._url;
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            onSuccess(data);
        } catch (error) {
            onError('ConnectionException: ' + error.message);
        }
    }

    async createNote(tipo, contenido, onSuccess, onError) {
        try {
            const response = await fetch(this._url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ tipo, contenido }),
            });

            if (!response.ok) throw new Error('Network response was not ok');
            const nuevaNota = await response.json();
            onSuccess(nuevaNota);
        } catch (error) {
            onError('Error al crear nota: ' + error.message);
        }
    }
}

