const express = require('express') //commonjs
const UserRoute = require('./routes/users')
const ProductRoute = require('./routes/products')

const app = express()
const port = 8080
app.use(express.json())
app.use(UserRoute)
app.use(ProductRoute)

app.listen(port, ()=>{
    console.log("server is started in port" + port)
})