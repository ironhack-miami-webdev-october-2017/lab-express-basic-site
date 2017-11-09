// import that "express" package into our application
const express =  require('express');
                //npm install express

// create an Express "app" object
const app = express();

// tell Express we have our static files in the "public/" folder
                            //                         |
                            // ------------------------
                            // |
app.use(express.static("public"));
            // static() is a built-in Express method

// tell Express we have our HTML files in the "html-files/" folder
//                                                  |
//                       ----------------------------
//                      |
app.set("views", "html-files");
app.set("view engine", "ejs");
//                        |
//                        -------------
//                                     |
//tell Express that we are using the "ejs" package for our separate HTML files


//create a new route in Express
//               | one of the pages on our website

// anatomy of a route
// app.VERB('URL', (request, response, next) => {
// });


app.get("/", (request, response, next) => {
  // tell Express that when users visit this page
  // they get the contents of "./html-files/home.ejs"
  response.render("home.ejs");
});

app.get("/about", (request, response, next) => {
  response.render("about.ejs");
});

app.get("/gallery", (request, response, next)=> {
  response.render("gallery.ejs");
});

app.listen(3200);
