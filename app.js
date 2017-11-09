const express = require("express");
// create an Express "app" object
const node_app = express();


node_app.use(express.static("public"));

node_app.set("views", "html-files");
node_app.set("view engine", "ejs");

//       ---------
//       |
app.get("/", (request, response, next) => {
    // Tell Express that when users visit this page
    // they get the contents of "./html-files/html-page1.ejs"
    //                                          |
    //                 --------------------------
    //                 |
    response.render("html-page1.ejs");
});

app.get("/", (request, response, next) => {
    // Tell Express that when users visit this page
    // they get the contents of "./photo-gallery.ejs"
    //                                          |
    //                 --------------------------
    //                 |
    response.render("photo-gallery.ejs");
});
app.get("/", (request, response, next) => {
    // Tell Express that when users visit this page
    // they get the contents of "./photo-gallery.ejs"
    //                                          |
    //                 --------------------------
    //                 |
    response.render("about-page.ejs");
});
app.listen(3000);
