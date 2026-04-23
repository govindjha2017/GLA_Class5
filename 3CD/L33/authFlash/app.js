const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./model/user");
const bcrypt = require("bcrypt");
const session = require("express-session");
const flash = require("connect-flash");

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb://localhost:27017/auth_CD")
    .then(()=>{console.log("DB conected!")})
    .catch(()=>{console.log("DB not conected")})
    
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use(flash())

app.use((req,res,next)=>{
    res.locals.msg =  req.flash("msg");

    next()
})

    
app.get("/",(req,res)=>{
    res.render("home")
})

let isAuth = (req,res,next)=>{
    
    if(req.session.user){
        next();
    }else{
        res.redirect("/login")
    }
}

app.get("/payment",isAuth,(req,res)=>{
    res.render("payment")
})

app.get("/signup",(req,res)=>{
    res.render("signup");
})

app.post("/signup",async (req,res)=>{
    const {username,password,email} = req.body;
 
    let existingUser = await User.findOne({username})
    if(existingUser){
        req.flash("msg","user allready exist")
        res.redirect("/signup")
    }
    else{
        const salt = 10;
        const hashPassword = await bcrypt.hash(password,salt);
        await User.create({username,email,password:hashPassword});

        req.flash("msg","Signup succes")
        res.redirect("/login")
    }
})

app.get("/login",(req,res)=>{
    res.render("login")
})

app.post("/login",async (req,res)=>{
    const {username,password} = req.body;
    let existingUser = await User.findOne({username});
    if(existingUser){
        //password match
        let check = await bcrypt.compare(password,existingUser.password);
        if(check){
            //user verify;
            //craete session
            req.session.user=username;
            req.flash("msg","Login sucessfully")
            res.redirect("/")
        }else{
            //password wrong

            req.flash("msg","Password incorrect")
            res.redirect("/login")
        }

    }else{
        // username incorrect
        req.flash("msg","username incorrect")
        res.redirect("/login")
    }

})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server run at port ${PORT}`);
})