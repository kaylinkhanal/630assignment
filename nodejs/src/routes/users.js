
const {Router} = require('express')
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/samajikDb');

const User = mongoose.model('User', {
      fullName: String,
      email: String,
      gender: {
        type: String,
        enum : ['Male', 'Female', 'Other'],
        default: 'Male'
      },
      dateOfBirth: String,
      password: String,
      phoneNumber: String
   });

   

const UserRoute = Router()

UserRoute.post('/register', (req, res) => {
    User.create(req.body)
    res.send("user created!!")
  })


UserRoute.get('/users', async (req, res) => {
   const data = await User.find()
    res.send(data)
})

UserRoute.get('/users/:id', async (req, res) => {
  const data = await User.findById(req.params.id)
  res.send(data)
})

UserRoute.delete('/users/:id', async (req, res) => {
  const data = await User.findByIdAndDelete(req.params.id)
  res.send({
    msg: `${req.params.id} user deleted!`
  })
})


UserRoute.put('/users/:id', async (req, res) => {
  const data = await User.findByIdAndUpdate(req.params.id, req.body)
  res.send({
    msg: `${req.params.id} user edited!`
  })
})






module.exports = UserRoute;