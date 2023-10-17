const express = require('express');
const app = express();
let port = 3000;
let path = require('path');

/* Routing */
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/views/home.html')));

/* Middleware */
app.use(express.static('public'));

/* Server */
app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}\n http://localhost:${port}`));

