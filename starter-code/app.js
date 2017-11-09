const express = require("express");
const app = express();


app.use(express.static("public"));

app.set("views");
app.set("view engine", "ejs");

app.get("/index", (request, response, next) => {
  response.render("index.ejs");
});

app.get("/about", (request, response, next) => {
  response.render("about.ejs");
});

app.get("/gallery", (request, response, next) => {
  response.render("gallery.ejs");
});

app.listen(3000);
