const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// Caminho para a pasta "app"
const publicpath = path.join(__dirname, 'app');
console.log('Caminho para a pasta app:', publicpath);

// Servir arquivos estáticos (CSS, JS, imagens, etc.)
app.use('/app', express.static(publicpath));

const imagePath = path.join(__dirname, 'public', 'imagens');
app.use('/imagens', express.static(imagePath));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(publicpath, 'index.html'));
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
