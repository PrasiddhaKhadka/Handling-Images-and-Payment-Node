const mongoose = require('mongoose')

const ProductImageSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,'Please enter the title'],
    },
    price:{
        type:Number,
        required:[true,'Please Enter the Price'],
    },
    image:{
        type:String,
        required:true,
    }

})


module.exports = mongoose.model('ProductImages',ProductImageSchema)