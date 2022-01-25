//require express to use express
const express = require('express');

//create server
const app = express();

//make public available
app.use(express.static("public"));

//home-page route with app.get. a callback function with 3 parameters
app.get("/", (req, response, next) =>
  response.sendFile(__dirname + "/views/home-page.html")
);

//about-page route
app.get("/about", (request, response, next) =>
  response.sendFile(__dirname + "/views/about-page.html")
);

//works-page route
app.get("/works", (request, response, next) =>
  response.sendFile(__dirname + "/views/works-page.html")
);

//photo-gallery-page
app.get("/photo-gallery", (request, response, next) =>
  response.sendFile(__dirname + "/views/photo-gallery-page.html")
);

//start server
app.listen(3000, () => console.log('App listening to port 3000'));