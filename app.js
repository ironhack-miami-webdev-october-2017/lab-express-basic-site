console.log("start")

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/public/main.js'));

const port = 5555;

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/views/home-page.html');
});

app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/about-page.html');
});

app.get('/works', (request, response) => {
    response.sendFile(__dirname + '/views/works-page.html');
});

app.get('/gallery', (request, response) => {
    response.sendFile(__dirname + '/views/gallery-page.html');
});

app.listen(port, function () {
	console.log(`Server listening on port ${port}`)
});