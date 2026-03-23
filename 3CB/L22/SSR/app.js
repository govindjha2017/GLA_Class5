const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/products")

app.set("view engine","ejs");

mongoose.connect("mongodb://localhost:27017/SSR-CB")
    .then(()=>{
        console.log("DB conected")
    })
    .catch(()=>{
        console.log("DB not conected");
    })

app.get('/',(req,res)=>{
    res.render("home")
})

app.get('/products',async (req,res)=>{
    const products = await Product.find({})
    res.render("products",{products})
})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log("server run at port ",PORT);
})