const bcrypt = require('bcrypt');
const saltRounds = 10;
const {Router} = require('express')

const jwt = require('jsonwebtoken');
const User = require('../models/user');



const UserRoute = Router()


UserRoute.post('/register', async (req, res) => {
    //step 1: check if email is taken
    const emailExists = await User.exists({email: req.body.email})
    const phoneExists = await User.exists({phoneNumber: req.body.phoneNumber})
    if(emailExists || phoneExists) {
      return res.status(403).send({msg: 'Email/Phone already taken'})
    }
    //step 2: generate hash password 
    req.body.password = await bcrypt.hash(req.body.password, saltRounds);
    //step 3: create new document in the User collection
    User.create(req.body)
    res.send({msg:"user created!!"})
  })

  UserRoute.post('/login',async (req, res) => {
   const user = await User.findOne({email: req.body.email})
   if(!user){
    return res.status(401).send({msg: 'Invalid email!'})
   }
   const isMatched = await bcrypt.compare(req.body.password, user.password);
   if(isMatched){
    const  token = jwt.sign({ email: req.body.email }, 'shhhhh');
    res.send({user,token,isLoggedIn: true})
   }else{
    res.status(401).send({msg: 'incorrect password'})
   }
      
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