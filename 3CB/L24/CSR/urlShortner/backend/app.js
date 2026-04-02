const express = require("express");
const app = express();

const mongoose = require("mongoose");
const Url = require("./models/Url")

mongoose.connect("mongodb://localhost:27017/url_CB")
    .then(()=>{console.log("DB Conected")})
    .catch(()=>{console.log("DB not conected")})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log("Server run at port",PORT)
})