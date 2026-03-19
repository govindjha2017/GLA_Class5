const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./model/product");

app.set("view engine",'ejs');

mongoose.connect("mongodb://localhost:27017/SSR-CC")
    .then(()=>{console.log("DB conected!")})
    .catch(()=>{console.log("DB not conected!")})


app.get("/",(req,res)=>{
    // res.send("Home page")
    res.render("home")
})

app.get('/about',(req,res)=>{
    res.render("about")
})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log("Server run at port ",PORT)
})