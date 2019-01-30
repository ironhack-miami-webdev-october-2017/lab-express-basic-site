// Require express
const express = require('express');
const path = require('path');


// Express server handling requests and responses
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static('public'));

// app.use((req, res, next) => {
//   console.log('middleware 🤪');
//   next();
// });

// Route to about
app.get('/about', (req, res, next) => {
  res.render('about');
  // res.send("About me? Huh, I'm special");
  next();
});

// Route to gallery
app.get('/gallery', (req, res, next) => {
  res.render('gallery');
  // const image = new Image();
  // image.src = path.join(__dirname, '/public/rugby.jpg');
  // res.send(image);
  next();
});

// First route
app.get('/', (req, res, next) => {
  res.render('index');
  // res.send('Hello World! You are in home page now');
  next();
});

// Start the server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
