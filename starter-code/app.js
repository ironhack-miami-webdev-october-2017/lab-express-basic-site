// Require Express
const express = require("express");
// Create express Object
const app = express();
// This is where static files are located
app.use(express.static("public"));
// This is where html files are located
app.set("views", "views");
// We are using ejs for html files
app.set("view engine", "ejs");

// Routes
app.get("/", (request, response, next) => {
    response.render("home.ejs");
});

app.get("/about", (request, response, next) => {
    response.render("about.ejs");
});

app.get("/gallery", (request, response, next) => {
    response.render("gallery.ejs");
});

// Server started
app.listen(3000);
