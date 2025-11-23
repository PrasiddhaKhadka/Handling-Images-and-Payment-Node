const getProduct = async(req,res)=>{
    res.status(200).json({
        msg:'Hello World!'
    })
}

const postProduct = async(req,res)=>{
    res.status(200).json({
        msg:'Hello World!'
    })
}

module.exports = { getProduct, postProduct }