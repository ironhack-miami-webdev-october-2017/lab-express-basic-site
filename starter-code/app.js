const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/about', (req, res) => {
    console.log(req)
    res.sendFile(__dirname +'/views/about.html')
  })

  app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
  })

  app.get('/photos', (req, res) => {
    res.sendFile(__dirname + '/views/photos.html')
  })



  app.listen(3000, () => {
      console.log(`server on: localhost:${3000}`)
  })