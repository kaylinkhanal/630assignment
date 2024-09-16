const express = require('express') //commonjs
const UserRoute = require('./routes/users')
const app = express()
const port = 8000
app.use(express.json())
app.use(UserRoute)


app.listen(port, ()=>{
    console.log("server is started in port" + port)
})