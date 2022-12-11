const mongoose=require('mongoose')
const {ObjectId}=mongoose.Schema.Types
const cartSchema =new mongoose.Schema({
    addCart:[{type:ObjectId,ref:"Post"}]

})
mongoose.model("User",cartSchema)