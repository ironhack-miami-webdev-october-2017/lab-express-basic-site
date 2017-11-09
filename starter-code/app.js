const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('views', 'views');
app.set('view engine', 'ejs');

app.get('/', (request, response, next) => {
  response.render('home.ejs');
});
app.get('/about', (request, response, next) => {
  response.render('about.ejs');
});
app.get('/photo-gallery', (request, response, next) => {
  response.render('photo-gallery.ejs');
});

app.listen(3000);
