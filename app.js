const express = require('express');
const logger = require('morgan');
const http = require('http');

const app = express();

app.use(logger('short'));

app.get('/', (request, response)=>{
    response.end('Welcome');
});

app.get('/about', (request, response)=>{
    response.end('About');
});

app.get('/hello/:who', (request, response)=>{
    const who = request.params.who;
    response.end(`Hello ${who}`);
});

app.use((request, response) => {
    response.statusCode = 404;
    response.end('404');
});

http.createServer(app).listen(3000);