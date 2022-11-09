//1. Requerir express con require("express")
const express = require("express");
const app = express();

//Configuracion para consultar los recuros
app.use(express.static("public"));

app.get("/",(req, res)=>{
    res.sendFile(__dirname+"/views/index.html")
})

console.log(__dirname)

app.get('/about',(req, res)=>{
    res.sendFile(__dirname+"/views/about.html")
})

app.get("/works",(req, res)=>{
    res.sendFile(__dirname+"/views/works.html")
})

app.get("/gallery",(req, res)=>{
    res.sendFile(__dirname+"/views/gallery.html")
})

app.get("*",(req,res)=>{
    res.send("<h1>Pagina no existe</h1>")
})

//Puerto / port
app.listen(3000, ()=>{
    console.log("Servidor listo en el puerto 3000 🤯👌🚀🔥")
})