const express = require("express");
const app = express();

const mongoose = require("mongoose");

// mongodb://localhost:27017
// mongodb://127.0.0.1:27017

mongoose.connect('mongodb://localhost:27017/sec-CB')
    .then(()=>{
        console.log("Db conected")
    })
    .catch(()=>{
        console.log("Db not conected")
    })

const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    city:String
})

app.listen(5000)
// const PORT = 5000;
// app.listen(PORT,()=>{
//     console.log("Server run at port ",PORT);
// })