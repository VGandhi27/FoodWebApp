const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin  = require('../middleware/requireLogin')
const Cart = mongoose.model("Cart")

 



  
router.post("/shipping",requireLogin,(req,res)=>{

  const {address,sector,city,phoneno  }=req.body
  if(!address ||!sector||!city||!phoneno){
      return res.status(422).json({error:"Please add all the fields"})
  }
     req.user.password=undefined
  const post=new Cart({
    address,
    sector,
    city,
    phoneno,
    postedBy:req.user
  })
  post.save().then(result=>{
      res.json({post:result})

  })
  .catch(err=>{
      console.log(err)
  })
})


// router.post('/createpost',requireLogin,(req,res)=>{
//     const {title,body,pic} = req.body 
//     if(!title || !body || !pic){
//       return  res.status(422).json({error:"Plase add all the fields"})
//     }
//     req.user.password = undefined
//     const post = new Post({
//         title,
//         body,
//         photo:pic,
//         postedBy:req.user
//     })
//     post.save().then(result=>{
//         res.json({post:result})
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// })

router.post('/shippinginfo',(req,res)=>{
  const {address,sector,city,phoneno  }=req.body
  if(!address ||!sector||!city||!phoneno){
    return res.status(422).json({error:"Please add all the Credential"})
  }
  // req.user.password=undefined

      const cart=new Cart({
        address,
        sector,
        city,
        phoneno,
        // postedBy:req.user
       })
       cart.save()
       .then(cart=>{
            res.json({message:"saved successfully"})
       })
       .catch(err=>{
           console.log(err)
       })
   
  

  
})



  module.exports = router