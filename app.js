
const express = require('express');
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

//Home
app.get('/Home', (request, response, next) => response.sendFile(__dirname + '/views/Home.html'));

//About
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));

//Works
app.get('/photogallery', (request, response, next) => response.sendFile(__dirname + '/views/photogallery.html'));

//Photogallery
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works.html'));

// Server Started
app.listen(3001, () => console.log('My first app listening on port 3000!'));
