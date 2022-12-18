const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin  = require('../middleware/requireLogin')
const Post =  mongoose.model("Post")
const User = mongoose.model("User")
const Cart = mongoose.model("Cart")



router.post("/shipping",requireLogin,(req,res)=>{

  const {address,sector,city,phonenumber}=req.body
  if(!address||!sector||!city||!phonenumber){
    return res.status(422).json({error:"Please add all the fields"})
  }
     req.user.password=undefined
  const post=new Post({
      address,
      sector,
      city,
      phonenumber
  })
  post.save().then(result=>{
      res.json({post:result})
      console.log({post:result})

  })
  .catch(err=>{
      console.log(err)
  })
})

  

  module.exports = router