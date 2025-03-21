import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes.js';
import db from './config/bd.js';

// * Crear app
const app = express();

// * Conexion a BBDD
try {
    await db.authenticate();
    console.log('Conexion correcta a BBDD');
} catch (error) {
    console.log(error);
}

// Habilitar Pug
app.set('view engine', 'pug');
app.set('views', './views');

// Carpeta publica
app.use(express.static('public'));

// Routing
app.use('/auth', usuarioRoutes);

// Definir un puerto y arrancar el proyecto
const port = 3000;
app.listen(port, function () {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});