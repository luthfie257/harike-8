// const http = require('http');
// const port =3000;
// const server = http.createServer((req, res) => {
//     res.writeHead(200,{
//         'Content-Type': 'text/html'
//     });
//     res.write('<h1>Hello World</h1>');
//     res.end();
// });
// server.listen(port,() => {
// console.log(`Server running at ${port}...`);
// });

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile('./index.html', {root:__dirname});
});

app.get('/about', (req, res) => {
    res.sendFile('./about.html', {root:__dirname});
});

app.get('/contact', (req, res) => {
    res.sendFile('./contact.html', {root:__dirname});
});

app.get('/product/:id', (req, res) => {
    res.send(`Product ID: ${req.params.id} <br> Category ID: ${req.query.idCat}`);
});

app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>Test</h1>');
});

app.listen(port,() => {
    console.log(`Exaple app listening port ${port}`);
});