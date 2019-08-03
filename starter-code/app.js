// GLOBAL VARIABLES AND PACKAGES AT THE TOP

// Always require express first
const myExpress = require('express');

// declare port - not necessary
const PORT = 3000;

// Express server handling requests and responses
// express is allowing you to create app by declaring it and using the express package
// to have access to all the methods
const app = myExpress();

// ******************************************************************
// PUBLIC FOLDER
// ******************************************************************

app.use(myExpress.static("public"));
// This is telling express that all the static files (images, css) will be available in the public folder.


// ******************************************************************
// ROUTES
// ******************************************************************

// Your routes - In express, the routes are not local host, they are anything that comes
// after the local host. Uses a callback function to get the page.
// this next command sends it the file where the HTML is stored 
// localhost: 3000/homepage:                                                    below is the name of the file users see
app.get('/', (request, response, next) => response.sendFile(__dirname + "/views/home.html"));
app.get('/about', (request, response, next) => response.sendFile(__dirname + "/views/about.html"));
app.get('/photos', (request, response, next) => response.sendFile(__dirname + "/views/photos.html"));

// Set the port where the app is listening.
app.listen(PORT,()=> console.log('Running on port 3000.'));