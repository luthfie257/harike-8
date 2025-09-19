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
const expressLayout = require('express-ejs-layouts');
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(expressLayout);
app.set('layout', 'layout/main-layout');
app.get('/', (req, res) => {
    const mahasiswa = [
        {
            nama: 'Rizky',
            email: 'qwe@gmail.comm'
        },
        {
            nama: 'Asep',
            email: 'asep@gmail.com',
        },
        {
            nama: 'Budi',
            email: 'budi@gmail.com',
        }
    ];
    res.render('index', {
        title : 'Halaman Home',
        mahasiswa : mahasiswa,
    });
});


app.get('/about', (req, res) => {
    res.render('about', {title : 'Halaman About'});
});

app.get('/contact', (req, res) => {
    res.render('contact', {title : 'Halaman Contact'});
});

app.get('/product/:id', (req, res) => {
res.send(`Product ID: ${req.params.id} <br> Category ID: ${req.params.idCat}`);
});

app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>Test</h1>');
});

app.listen(port,() => {
    console.log(`Exaple app listening port ${port}`);
})