const mongoose=require('mongoose')
const {ObjectId}=mongoose.Schema.Types
const cartSchema =new mongoose.Schema({
    address:{
        type:String,
        required:true
    },
    sector:{
        type:String,
        required:true 
    },
    city:{
        type:String,
        required:true
    },
    phoneno:{
        type:String,
        required:true
    },
    postedBy:{
        type:ObjectId,
        ref:"User"
    }
})
mongoose.model("Cart",cartSchema)