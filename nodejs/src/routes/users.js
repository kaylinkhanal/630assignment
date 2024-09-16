const {Router} = require('express')
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/samajikDb');

const User = mongoose.model('User', { name: String, age:Number, isPremiumSubscriber:Boolean  });


const UserRoute = Router()
UserRoute.post('/register', (req, res) => {
    User.create(req.body)
    res.send("user created!!")
  })


module.exports = UserRoute;