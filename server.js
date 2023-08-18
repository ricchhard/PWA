const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Puerto del servidor (usa el puerto definido por el entorno o 3000 por defecto)

// Configurar middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Manejar todas las rutas para redirigir al archivo index.html (para que funcione con rutas de la PWA)
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

app.get('/service-worker.js', (req, res) => {
    res.sendFile(__dirname + '/public/service-worker.js');
});