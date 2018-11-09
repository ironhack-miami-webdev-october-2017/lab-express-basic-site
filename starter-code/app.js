const express = require('express');
const app = express();



app.use(express.static('public'));








app.get('/', (req, res, next) => {
  res.send
  (`<h1>Welcome Ironhacker. :)</h1>
  <ul> <li>hello</li> </li>
  
  `);
});


app.get('/about', (req, res, next) =>{
  res.sendFile(_dirname + '/views/home-page.html');
});




app.get('/secondPage', (req, res, next) =>{
  res.sendFile(_dirname + '/views/home-page.html');
});
















app.listen(3000, () => {
  console.log('no one is listening')
});