const express = require('express');
const app = express();
let port = 3000;
let path = require('path');

/* Middleware */
app.use(express.static('public'));

/* Routing */
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/views/home.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, '/views/login.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, '/views/register.html')));

/* Server */
app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}\n http://localhost:${port}`));
