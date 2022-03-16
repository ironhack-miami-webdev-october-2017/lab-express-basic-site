const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/home', (request, response, next) => {
response.sendFile(__dirname + '/views/home.html')
})

app.get('/about', (req, res) => {
res.sendFile(__dirname + '/views/about.html')
})

app.get('/works', (req, res) => {
res.sendFile(__dirname + '/views/works.html')
})

app.get('/gallery', (req, res) => {
res.sendFile(__dirname + '/views/gallery.html')
})

app.listen(4009, () => console.log('server is running on port 4009'));