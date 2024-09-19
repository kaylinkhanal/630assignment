const bcrypt = require('bcrypt');
const saltRounds = 10;
const {Router} = require('express')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
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

UserRoute.post('/register',async (req, res) => {
    //step 1: check if email is taken
    const emailExists = await User.exists({email: req.body.email})
    const phoneExists = await User.exists({phoneNumber: req.body.phoneNumber})
    if(emailExists || phoneExists) {
      return res.send({msg: 'Email/Phone already taken'})
    }
    //step 2: generate hash password 
    req.body.password = await bcrypt.hash(req.body.password, saltRounds);
    //step 3: create new document in the User collection
    User.create(req.body)
    res.send("user created!!")
  })

  UserRoute.post('/login',async (req, res) => {
    
   //step1: email exists
   const user = await User.findOne({email: req.body.email})
   if(!user){
    return res.send('Invalid email!')
   }
   const isMatched = await bcrypt.compare(req.body.password, user.password);
   if(isMatched){
    const  token = jwt.sign({ email: req.body.email }, 'shhhhh');
    res.send({user,token,isLoggedIn: true})
   }else{
    res.send({msg: 'incorrect password'})
   }
      //yes: {
          // Step2: password compare (decrypt and check)
                //yes: {
                    // Step3: Generate JWT token for the USER
                    //Step4: send back userdetails, jwt, isLoggedIn: true
                    // const  token = jwt.sign({ email: req.body.email }, 'shhhhh');
                   
                // } 
                //no: {
                    // send msg: Password didn't match
                // }
      // }
   //step2: 
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