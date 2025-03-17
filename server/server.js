const { Console } = require('console');
const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

let publicpath = path.join(__dirname, 'public');
app.use(express.static(`${publicpath}`));

app.get('/', (req, res) =>{
    res.sendFile(`${publicpath}/index.html`);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 
