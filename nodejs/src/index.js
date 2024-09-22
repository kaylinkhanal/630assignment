const express = require('express') //commonjs
const app = express()
const UserRoute = require('./routes/users')
const ProductRoute = require('./routes/products')
const cors = require('cors')
const connection = require('./db/connection')

connection()

const port = 8080

app.use(express.json())
app.use(cors())
app.use(UserRoute)
app.use(ProductRoute)

app.listen(port, ()=>{
    console.log("server is started in port" + port)
})