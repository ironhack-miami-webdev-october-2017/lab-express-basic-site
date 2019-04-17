const express = require('express')

const server = express()

server.use(express.static('public'))

server.get('/',(req, res) => {
  res.sendFile(`${__dirname}/views/home-page.html`);
})
server.get('/gallery',(req, res) => {
  res.sendFile(`${__dirname}/views/gallery-page.html`);
})
server.get('/about',(req, res) => {
  res.sendFile(`${__dirname}/views/about-page.html`);
})
server.get('/contact',(req, res) => {
  res.sendFile(`${__dirname}/views/contact-page.html`);
})





server.use(function(req, res,) {
  res.status(404).sendFile(`${__dirname}/views/404-page.html`);
});

server.listen(8000, () =>{
  console.log('Listening on port: 8000');
  
})