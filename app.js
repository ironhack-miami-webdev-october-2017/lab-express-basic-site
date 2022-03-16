const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/home', (request, response, next) => {
console.log(request);
response.send(`<h1>Olá, isso é um teste 2</h1>`)
})

app.get('/about', (req, res) => {
res.sendFile(__dirname + '/views/about.html')
})

app.listen(4000, () => console.log('server is running on port 4000'));