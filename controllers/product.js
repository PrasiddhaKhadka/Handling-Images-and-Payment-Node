const ProductImageSchema = require('../models/product')

const getProduct = async(req,res)=>{
    const product = await ProductImageSchema.find({})
    res.status(200).json({
        msg:'Success',
        product:product
    })
}

const postProduct = async(req,res)=>{
    // const {title,price } = req.body

    const product = await ProductImageSchema.create(req.body)
    res.status(200).json({
        msg:'Success',
        product:product
    })
}

module.exports = { getProduct, postProduct }