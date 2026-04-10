const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/products")
const methodOverride = require('method-override');

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))

mongoose.connect("mongodb://localhost:27017/SSR-CB")
    .then(()=>{
        console.log("DB conected")
    })
    .catch(()=>{
        console.log("DB not conected");
    })


///ROUTES

app.get('/',(req,res)=>{
    res.render("home")
})

const productRoutes = require("./routes/product");
app.use(productRoutes);
const authRoutes = require('./routes/auth');
app.use(authRoutes);


const PORT = 5000;
app.listen(PORT,()=>{
    console.log("server run at port ",PORT);
})