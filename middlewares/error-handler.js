const CustomApiError = require('../errors/index')

const errorHandler = (req,res,next)=>{
    if(err instanceof CustomApiError)
    {
        res.status(err.status).json({msg:err.msg})
    }
    else{
        res.status(500).json({msg:err})
    }
}

module.exports = errorHandler