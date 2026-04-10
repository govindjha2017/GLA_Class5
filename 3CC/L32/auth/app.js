const express = require("express");
const app = express();
const Users = require("./models/Users");
const bcrypt = require("bcrypt");

const mongoose = require("mongoose");
app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb://localhost:27017/auth_CC")
    .then(()=>{console.log("DB conected")})
    .catch(()=>{console.log("DB not conected")})

app.get('/',(req,res)=>{
    res.render("home")
})

app.get('/signup',(req,res)=>{
    res.render("signup")
})

app.post('/signup',async (req,res)=>{
    // console.log(req.body);
    const {username,password,email} = req.body;

    let existingUser = await Users.findOne({username});

    if(existingUser){
        res.redirect("/signup")
    }
    else{
        const hashPassword = await bcrypt.hash(password,10);

        await Users.create({username,email,password:hashPassword})

        res.redirect('/login')
    }
})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log("Server run at port",PORT)
});