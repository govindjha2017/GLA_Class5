const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./model/user")

app.set("view engine","ejs");

mongoose.connect("mongodb://localhost:27017/auth_CD")
    .then(()=>{console.log("DB conected!")})
    .catch(()=>{console.log("DB not conected")})
    
app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/signup",(req,res)=>{
    res.render("signup");
})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server run at port ${PORT}`);
})