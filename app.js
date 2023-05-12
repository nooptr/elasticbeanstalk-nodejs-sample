const express = require('express')
const app = express()

const port = process.env.PORT || 3000;
const fs = require('fs');
const html = fs.readFileSync('index.html');

app.get('/', (req, res) => {
    res.writeHead(200);
    res.write(html);
    res.end();
})

app.get('/test', (req, res) => {
    res.writeHead(200);
    res.write("<h1>Hello world</h1>");
    res.end();
})

app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}`)
})