require('dotenv').config()
const express = require('express')
app = express()

// FILE UPLOAD 
const fileUpload = require('express-fileupload')
const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET
})


const notFoundMiddleWare = require('./middlewares/not-found-middleware')
const errorHandler = require('./middlewares/error-handler')

app.use(express.json())
app.use(fileUpload( { useTempFiles: true }))


app.get('/',(req,res)=>{
    res.status(200).json({msg:'Running File Upload Starter'})

})
//DB CONNECTION
const connectDb = require('./db/connection-db')
// ROUTER 
const productRouter = require('./routes/product-route')
app.use('/api/v1/',productRouter)

const uploadImageRouter = require('./routes/upload-route')
app.use('/api/v1/',uploadImageRouter)

app.use(notFoundMiddleWare)
app.use(errorHandler)


const startApp = async()=>{
    try {
        await connectDb(process.env.MONGODB_URI)
        app.listen(8000,()=>{
            console.log('Running at 8000')
        })
    } catch (error) {
        console.log(error)
    }
}

startApp()