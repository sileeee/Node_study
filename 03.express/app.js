const { response } = require('express');
const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('express start!');
});

app.get('/addingURL', (req,res) => {
    res.send('adding this url');
});

app.listen( port, () => {
    console.log('Express listening on port', port);
});

// express 사용하지 않고 내장모듈을 활용해 웹 서버 띄어보기
// 
// const http = require('http');

// http.createServer((request, response) => {
//     response.writeHead(200, {'Content-Type' : 'text/plain'});
//     response.write('Hello Server');
//     response.end();
// }).listen(3000);