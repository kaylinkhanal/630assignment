
const {Router} = require('express')
const Product = require('../models/product')



const ProductRoute = Router()

ProductRoute.post('/products', (req, res) => {
    Product.create(req.body)
    res.send("product created!!")
  })


  ProductRoute.get('/products', async (req, res) => {
   const data = await Product.find()
    res.send(data)
})

ProductRoute.get('/products/:id', async (req, res) => {
  const data = await Product.findById(req.params.id)
  res.send(data)
})

ProductRoute.delete('/products/:id', async (req, res) => {
  const data = await Product.findByIdAndDelete(req.params.id)
  res.send({
    msg: `${req.params.id} product deleted!`
  })
})


ProductRoute.put('/products/:id', async (req, res) => {
  const data = await Product.findByIdAndUpdate(req.params.id, req.body)
  res.send({
    msg: `${req.params.id} product edited!`
  })
})






module.exports = ProductRoute;