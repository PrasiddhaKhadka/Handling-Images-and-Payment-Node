const mongoose = require('mongoose')

const connectDb = async(MONGODB_URL)=>{
    try {
        await mongoose.connect(MONGODB_URL)
        console.log('DATABASE CONNECTED')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDb