const express = require("express");
const app = express();
const Url = require("./models/Url")
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/url_CD")
    .then(()=>{console.log("DB conected !")})
    .catch(()=>{console.log("DB not conected")})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log("server run at port",PORT);
})