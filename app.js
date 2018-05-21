// Express server handling requests and responses
const express = require('express');
const app = express();

//ADD PUBLIC ASSETS
app.use(express.static('public'));

//HOME PAGE ROUTE
app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/views/home-page.html');
});

//ABOUT PAGE ROUTE
app.get('/about', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/about-page.html');
});

//PHOTO GALLERY
app.get('/gallery', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/home-page.html');
});


// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});