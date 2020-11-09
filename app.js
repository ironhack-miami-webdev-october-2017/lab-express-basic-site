// DEPENDENCIAS Y GENERACIÓN DE VARIABLES
const { response } = require('express');
const express = require('express');
const app = express();
// MIDDLEWARES
app.use(express.static('public'))
// RUTAS
// Mi ruta principal /
app.get('/', (request, response, next) => {
    console.log(request);
    response.send('<h1>Esta es la Boigrafia de Alber Einstein</h1>')
})

app.get('/home', (request, response, next) => {
    response.sendFile(__dirname + '/views/home.html')
})

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + '/views/about.html')
})
app.get('/works', (request, response, next) => {
    response.sendFile(__dirname + '/views/works.html')
})
app.get('/photo', (request, response, next) => {
    response.sendFile(__dirname + '/views/photo.html')
})
// LISTENER
app.listen(4000, () => {
    console.log("My first app listening on port 3000! :)")
})