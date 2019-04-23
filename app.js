const express = require('express');
const app = express();


app.use(express.static('public'));

// our first Route
app.get('/', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/home-page.html');
});


app.get('/home-page', (request, response, next) => {
  response.sendFile(__dirname + '/views/home-page.html');
});

app.get('/about-page', (request, response, next) => {
  response.sendFile(__dirname + '/views/about-page.html');
});


app.get('/photo-gallery', (request, response, next) => {
  response.sendFile(__dirname + '/views/photo-gallery.html');
});





app.listen(4000, () => {
  console.log('My first app listening on port 4000!')
});