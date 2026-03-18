const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/SSR-CB")
    .then(()=>{
        console.log("DB conected")
    })
    .catch(()=>{
        console.log("DB not conected");
    })

const Products = require("./models/products");


const PORT = 5000;
app.listen(PORT,()=>{
    console.log("server run at port ",PORT);
})