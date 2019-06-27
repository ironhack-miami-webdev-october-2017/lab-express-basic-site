'use strict'

const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) =>{
  response.sendFile(__dirname + '/public/views/index.html');
});

app.get('/about',(request, response, next)=>{
response.sendFile(__dirname + '/public/views/about.html');
});

app.get('/gallery', (request, response, next)=>{
  response.sendFile(__dirname + '/public/views/gallery.html');
});

app.listen(3000, ()=>{
  console.log('hey Dude!');
  
});