const express = require ("express");

const app= express();

app.use(express.static("public"));

app.set("views","html-files");

app.set("view engine","ejs");


app.get("/",(request, response, next)=>{
  response.render("home.ejs");
});

app.get("/about",(request, response, next)=>{
  response.render("about.ejs");
});

app.listen(4200);
