console.log("hello express !!!")

const express = require("express")

const server = express();
const path = require("path");
const port = 8080

server.use(express.static(path.join(__dirname, "/public")))
server.set("views", path.join(__dirname,"views"))
server.set("view engine", "hbs")

server.get("/", (request, response) => {
    response.render("home")
})

server.get("/about", (request, response) => {
    response.render("about")
})
server.get("/photo", (request, response) => {
    response.render("photo")
})

server.listen(port)
console.log(server)