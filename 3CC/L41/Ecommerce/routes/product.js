const express = require("express");
const router = express.Router();
const Product = require("../model/product");
const productSchema = require("../joivalidation")

let validateProduct = async (req,res,next)=>{
    const {name,image,price,desc} = req.body;

    try {
        const value = await productSchema.validateAsync({name,image,price,desc});

        next()
    } catch (err) {

        req.flash("error",err.details[0].message);
        res.redirect(req.get("Referer"));
    }

}

router.get('/products',async (req,res)=>{
     console.log(req.user);
    const products = await Product.find({});
    res.render("product/index",{products})
})

router.get('/product/new',(req,res)=>{
    res.render("product/new")
})

router.post('/products',validateProduct,async(req,res)=>{
    const {name,image,price,desc} = req.body;
    await Product.create({name,image,price,desc});
    req.flash("success","Product created successfully!")
    res.redirect("/products")
})

router.get("/product/:id/edit",async(req,res)=>{
   
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render("product/edit",{product})
})

router.patch("/products/:id",validateProduct,async (req,res)=>{
    const {id} = req.params;
    const {name,image,price,desc} = req.body;
    await Product.findByIdAndUpdate(id,{name,image,price,desc});
    req.flash("success","Product updated successfully!")
    res.redirect('/products')
})

router.delete("/products/:id",async (req,res)=>{
    const {id} = req.params;
    await Product.findByIdAndDelete(id);
    req.flash("error","Product Deleted successfully!")
    res.redirect('/products')
})


module.exports = router;