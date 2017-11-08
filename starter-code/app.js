const express = require ('express');

const app = express();

app.use( express.static( 'public' ) );

app.get( '/', (request, response, next) => {
  response.render( 'home.ejs' );
});

app.get( '/about', (request, response, next) => {
  response.render( 'about.ejs' );
});

app.get( '/contact', (request, response, next) => {
  response.render( 'contact.ejs' );
});

app.listen(3000);
