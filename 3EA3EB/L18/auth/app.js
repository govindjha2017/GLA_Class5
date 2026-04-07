const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Users = require("./models/User");

const bcrypt = require("bcrypt")

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb://localhost:27017/auth_hons")
    .then(()=>{console.log("DB conected!")})
    .catch(()=>{console.log("DB not conected!")})

app.get('/',(req,res)=>{
    res.render("home")
})

let isAuth = (req,res,next)=>{

}

app.get('/payment',(req,res)=>{
    res.render("payment")
})

app.get('/signup',(req,res)=>{
    res.render("signup");
})

app.post("/signup",async(req,res)=>{
    const {username,email,password} = req.body;
    let saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    const existingUser = await Users.findOne({username});

    if(!existingUser){
       await Users.create({username,email,password:hashPassword});
       res.redirect('/login')
    }
    else{
        res.redirect('/signup')
    }
})


app.get('/login',(req,res)=>{
    res.render("login")
})

app.post('/login',async(req,res)=>{
    const {username,password} = req.body;
    const user = await Users.findOne({username});

    if(user){
        let result = await bcrypt.compare(password,user.password);

        if(result){
            res.redirect('/payment')
        }
        else{
            res.redirect('/login')
        }
    }
    else{
        res.redirect('/login')
    }

})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log("Server run at port",PORT);
})