const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.set("view engine","ejs")

mongoose.connect("mongodb://localhost:27017/Ecom-CD")
    .then(()=>{console.log("DB conected")})
    .catch(()=>{console.log("DB not conected")})

app.get("/",(req,res)=>{
    res.render("home")

})

///   ROUTES

const productRoutes = require("./routes/product");
app.use(productRoutes);

const PORT = 5000;
app.listen(PORT,()=>{
    console.log("Server run at port 5000");
})