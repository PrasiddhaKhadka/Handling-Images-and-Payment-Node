const express = require('express')
const router = express.Router()

const {  getProduct, postProduct  } = require('../controllers/product')


router.get('/product',getProduct).post('/product',postProduct)


module.exports = router