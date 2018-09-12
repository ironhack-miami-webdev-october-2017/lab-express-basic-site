const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/',(req,rep,next)=>{
  rep.sendFile(__dirname+'/views/index.html')
})

app.get('/semana1',(req,rep,next)=>{
  rep.sendFile(__dirname+'/views/semana1.html')
})

app.get('/Galeria',(req,rep,next)=>{
  rep.sendFile(__dirname+'/views/Galeria.html')
})

app.listen(3000,()=>{
  console.log('funcionando en el puedo 3000')
})