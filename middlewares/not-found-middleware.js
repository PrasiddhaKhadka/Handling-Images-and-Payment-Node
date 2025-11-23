const notFoundMiddleWare = (req,res,next)=>{
    res.status(400).json({
        msg:'Not Found'
    })
}

module.exports = notFoundMiddleWare