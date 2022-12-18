const mongoose=require('mongoose')
const {ObjectId}=mongoose.Schema.Types
const paymentSchema =new mongoose.Schema({
    cardno:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    cv:{
        type:Integer,
        required:true
    }
})
mongoose.model("Payment",paymentSchema)