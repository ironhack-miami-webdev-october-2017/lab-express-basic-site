const express = require("express");
const app = express();

// root
app.get("/", (request, response, next) => {
  console.log(request);
  response.send("<h1>hello world</h1>");
});

// server
app.listen(3000, ()=>{
  console.log("app is running")
})