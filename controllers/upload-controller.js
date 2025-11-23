const path = require('path')
const CustomApiError = require('../errors')
const cloudinary = require('cloudinary').v2


const uploadController = async(req, res) => {
    // console.log('Headers:', req.headers)
    // console.log('Files:', req.files)
    // console.log('Body:', req.body)
    // console.log('Content-Length:', req.headers['content-length'])

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({ msg: 'No files were uploaded.' })
    }

    let productImage = req.files.image;
    if(!productImage.mimetype.startsWith('image')){
        throw new CustomApiError.BadRequestError('Please Upload Image')
    }

    const maxSize = 1024 * 1024;
    if(productImage.size > 1000){
        throw new CustomApiError.BadRequestError('Please upload image smaller 1kb')
    }
    const imagePath = path.join(__dirname,'../public/uploads/'+`${productImage.name}`)

    await productImage.mv(imagePath);
   
    
    res.status(200).json({ 
        msg: 'File received',
        files: req.files 
    })
}



const uploadControllerCloud = async(req,res)=>{
    const result = await cloudinary.uploader.upload(req.files.image.tempFilePath,{
        use_filename: true,
        folder:'file-upload-node',
    }
)
    return res.status(200).json({image:{src: result.secure_url}});

}

module.exports = uploadController