const express = require("express");

const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/pictures", (req, res) => {
  res.sendFile(__dirname + "/views/pics.html");
});

app.listen(3000, () => {
  console.log("server on: localhost: 3000");
});
