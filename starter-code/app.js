const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

// app.use(express.static('public'));



app.get('/w', (req, res, next) => {
  res.sendFile(__dirname + '/views/home-page.html');
});


app.get('/about', (req, res, next) =>{
  res.sendFile(__dirname + '/views/about.html');
});




app.get('/secondPage', (req, res, next) =>{
  res.sendFile(__dirname + '/views/secondPage.html');
});
















app.listen(3000, () => {
  console.log('no one is listening')
});