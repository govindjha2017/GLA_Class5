const express = require("express");
const router = express.Router();
const Product = require("../models/product")


router.get('/products',async (req,res)=>{
    const products = await Product.find({})
    res.render('product/index',{products})
})


module.exports = router;