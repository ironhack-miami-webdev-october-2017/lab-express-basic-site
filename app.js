const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) =>{
    console.log('home route');
    res.sendFile(__dirname + '/views/home.html');
})

app.get('/about', (req, res) =>{
    console.log('home route');
    res.sendFile(__dirname + '/views/about.html');
})

app.get('/works', (req, res) =>{
    console.log('home route');
    res.sendFile(__dirname + '/views/works.html');
})

app.get('/gallery', (req, res) =>{
    console.log('home route');
    res.sendFile(__dirname + '/views/gallery.html');
})


app.listen(3000);