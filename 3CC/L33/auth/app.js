const express = require("express");
const app = express();
const Users = require("./models/Users");
const bcrypt = require("bcrypt");
const session = require("express-session");

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie:{
    maxAge: 2*60*1000
  }
}))

const mongoose = require("mongoose");
app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb://localhost:27017/auth_CC")
    .then(()=>{console.log("DB conected")})
    .catch(()=>{console.log("DB not conected")})

app.get('/',(req,res)=>{
    console.log(req.session);
    res.render("home")
})

let isAuth = (req,res,next)=>{
    if(!req.session.user){
        res.redirect("/login")
    }
    else{
        next()
    }
}

app.get('/payment',isAuth,(req,res)=>{
    res.render("payment")
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

app.get('/login',(req,res)=>{
    res.render("login")
})

app.post('/login',async (req,res)=>{
    const {username,password} = req.body;
    const user = await Users.findOne({username});

    if(user){
        let result = await bcrypt.compare(password,user.password);

        if(result){
            //login valid
            req.session.user = username;
            res.redirect("/")
        }
        else{
            res.redirect("/login")
        }
    }
    else{
        res.redirect("/login")
    }
})

app.post("/logout",(req,res)=>{
    req.session.destroy();
    res.redirect("/")
})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log("Server run at port",PORT)
});