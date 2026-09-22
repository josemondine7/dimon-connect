require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const PUERTO = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Pantalla de inicio
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Estado de la plataforma
app.get('/api/estado', (req, res) => {
  res.json({
    nombre: 'Dimon Connect',
    version: '1.0.0',
    idioma: process.env.DEFAULT_LANGUAGE,
    funcionando: true
  });
});

app.listen(PUERTO, () => {
  console.log(`✅ Dimon Connect andando en el puerto ${PUERTO}`);
});
