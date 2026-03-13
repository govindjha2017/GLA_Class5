const express = require("express");
const app = express();
const path = require("path")

app.set('view engine',"ejs");
app.use(express.static(path.join(__dirname,"public")));

app.get('/',(req,res)=>{
    res.render("home")
})

app.get('/about',(req,res)=>{
    res.render('about')
})

const datas = ["Delhi","Noida","Banglore","pune"];

app.get('/city',(req,res)=>{
    res.render("city",{datas})
})

app.listen(5000);