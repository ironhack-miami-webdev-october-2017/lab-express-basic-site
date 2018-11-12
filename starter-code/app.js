var express = require("express")
var app = express()
var path = require("path")
var hbs = require("hbs")

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static('public'))

app.get("/", function(req, res){
  res.render("template")
})

app.get("/home", function (req, res) {
  res.render("home")
})

app.get("/about", function (req, res) {
  res.render("about")
})

app.get("/gallery", function (req, res) {
  res.render("gallery")
})

app.listen(3000, function() {
  console.log("listening")
})