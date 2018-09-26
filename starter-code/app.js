const 
      express = require('express'),
      app     = express();

app.use(express.static(`public`));

app.get('/', (req, res, nxt) => {
  res.sendFile(`${__dirname}/views/home.html`);
  
});
app.get(`/about`, (req, res, nxt) => {
  res.sendFile(`${__dirname}/views/about.html`);
});
app.get(`/gallery`, (req, res, nxt) => {
  res.sendFile(`${__dirname}/views/gallery.html`);
});

app.use((req, res) => {
  res.status(404).sendFile(`${__dirname}/views/404.html`);
});

app.listen(3000);