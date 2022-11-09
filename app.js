const express = require('express')
const path = require('path')

const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

require('./db/db-conection')

const Products = require('./models/Product.model.js')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/tienda', (req, res) => {

    Products
        .find()
        .sort({ price: 1 })
        .select({ thumbnail: 1, title: 1, description: 1, brand: 1, price: 1 })
        .then(allProducts => {
            console.log('Se ha creado este registro:', allProducts)
            res.render('tienda', { product: allProducts })
        })
        .catch(err => console.log(err))
})

app.listen(5005, () => console.log('APP LISTENING'))