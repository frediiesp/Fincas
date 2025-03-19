const express = require('express');

// * Crear app
const app = express();

// Routing
app.get('/', function(req, res) {
    res.send('Hola Mundo en Express!');
});

// Definir un puerto y arrancar el proyecto
const port = 3000;
app.listen(port, function () {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});