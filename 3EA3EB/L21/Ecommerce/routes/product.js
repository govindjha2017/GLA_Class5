const express = require("express");
const router = express.Router();

router.get('/products',async (req,res)=>{
    const products = await Product.find({})
  
    res.render("product/index",{products})
})

router.get('/products/new',(req,res)=>{
    res.render("product/new")
})

router.post('/products',async (req,res)=>{
    const {name,image,price,desc} = req.body;
    await Product.create({name,image,price,desc})
    res.redirect('/products')
})

router.get('/products/:id/edit',async(req,res)=>{
    const id = req.params.id ;
    const product =await Product.findById(id)
    
    res.render("product/edit",{product})
})

router.patch('/products/:id',async (req,res)=>{
    const id = req.params.id ;
    const {name,image,price,desc} = req.body;

    await Product.findByIdAndUpdate(id,{name,image,price,desc});

    res.redirect('/products')
})

router.delete('/products/:id',async (req,res)=>{
    const id = req.params.id ;
    await Product.findByIdAndDelete(id);
    res.redirect('/products')
})


module.exports = router;