const mongoose = require('mongoose')
const Post = mongoose.model("Post")
module.exports = (req,next)=>{
    const {cart} = req.headers
    // const token = authorization.replace("Bearer ","")
    const carts=((payload)=>{
       
        const {_id} = payload
        Post.findById(_id).then(postdata=>{
            req.user = postdata
            next()
        })
        
        
    })
}