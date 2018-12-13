const express = require("express")
const app = express();

app.use(express.static("./public"))


app.get("/", (req, res) => {
res.sendFile(__dirname + "/homepage.html")
})

app.get("/about", (req, res) => {
res.sendFile(__dirname + "/aboutpage.html")
})

app.get("/gallery", (req, res) => {
res.sendFile(__dirname + "/galleryhtml.html")
})


app.listen(3000)