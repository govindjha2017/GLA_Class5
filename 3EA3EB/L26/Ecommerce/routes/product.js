const express = require("express");
const router = express.Router();
const Product = require("../model/products");

const productSchema = require('../joiSchema');

let validateProduct = async (req,res,next)=>{
    const {name,image,price,desc} = req.body
    try {
        const value = await productSchema.validateAsync({name,image,price,desc});
        next()
    } catch (err) {
        console.log(err);
        // res.send(err.details[0].message);
        req.flash("error",err.details[0].message);
        res.redirect(req.get("Referer"))
    }
}

router.get('/products',async (req,res)=>{
    console.log(req.user);
    const products = await Product.find({})
  
    res.render("product/index",{products})
})

router.get('/products/new',(req,res)=>{
    res.render("product/new")
})

router.post('/products',validateProduct,async (req,res)=>{
    const {name,image,price,desc} = req.body;
    await Product.create({name,image,price,desc});
    req.flash("success","Product created !");
    res.redirect('/products')
})

router.get('/products/:id/edit',async(req,res)=>{
    const id = req.params.id ;
    const product =await Product.findById(id)
    
    res.render("product/edit",{product})
})

router.patch('/products/:id',validateProduct,async (req,res)=>{
    const id = req.params.id ;
    const {name,image,price,desc} = req.body;

    await Product.findByIdAndUpdate(id,{name,image,price,desc});
    req.flash("success","Product updated !");
    res.redirect('/products')
})

router.delete('/products/:id',async (req,res)=>{
    const id = req.params.id ;
    await Product.findByIdAndDelete(id);
    req.flash("success","Product Deleted !");
    res.redirect('/products')
})


module.exports = router;