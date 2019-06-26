
const express = require("express")
const app = express()

app.use(express.static("public"))

app.get("/About",(req,res)=>{
    res.sendFile(__dirname+"/public/views/About.html")
})
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/views/home.html")
})
app.get('/Photos', (req, res, next) => {
    res.sendFile(__dirname+"/public/views/Photos.html" )
  })

app.listen(3000,()=>{
    console.log("grandma is running on 3000")
})