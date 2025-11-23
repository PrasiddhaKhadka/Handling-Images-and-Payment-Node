const mongoose = require('mongoose')

const ProductImageSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,'Please enter the title'],
        minlength:10,
        maxlength:50
    }

})


module.exports = mongoose.model('Product',ProductImageSchema)