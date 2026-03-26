const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./model/products")

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb://localhost:27017/SSR-hons")
    .then(()=>{console.log("DB conected")})
    .catch(()=>{console.log("DB not conected")})


app.get('/',(req,res)=>{
    // res.send("Home page")
    res.render("home")
})

app.get('/products',async (req,res)=>{
    const products = await Product.find({})
  
    res.render("index",{products})
})

app.get('/products/new',(req,res)=>{
    res.render("new")
})

app.post('/products',async (req,res)=>{
    const {name,image,price,desc} = req.body;
    await Product.create({name,image,price,desc})
    res.redirect('/products')
})

app.get('/products/:id/edit',async(req,res)=>{
    const id = req.params.id ;
    const product =await Product.findById(id)
    
    res.render("edit",{product})
})

app.post('/update/:id',async (req,res)=>{
    const id = req.params.id ;
    const {name,image,price,desc} = req.body;

    await Product.findByIdAndUpdate(id,{name,image,price,desc});

    res.redirect('/products')
})

app.post('/delete/:id',async (req,res)=>{
    const id = req.params.id ;
    await Product.findByIdAndDelete(id);
    res.redirect('/products')
})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log("Server run at port ",PORT)
});