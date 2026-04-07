const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/auth_CB")
    .then(()=>{console.log("DB conected!")})
    .catch(()=>{console.log("DB not conected!")})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log("Server run at port",PORT);
})