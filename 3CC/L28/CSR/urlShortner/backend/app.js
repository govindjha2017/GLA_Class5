const express = require("express");
const app = express();
const Url = require("./models/Url");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/url_cc")
    .then(()=>{console.log("DB conected")})
    .catch(()=>{console.log("DB not conected")})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log("Server run at port",PORT);
})