const express = require("express");
const app = express();

const mongoose = require("mongoose");
const Users = require("./models/Users");
const bcrypt = require("bcrypt");

app.use(express.urlencoded({extended:true}))

app.set("view engine","ejs")

mongoose.connect("mongodb://localhost:27017/auth_CB")
    .then(()=>{console.log("DB conected!")})
    .catch(()=>{console.log("DB not conected!")})

app.get('/',(req,res)=>{
    res.render("home")
})

app.get('/signup',(req,res)=>{
    res.render("signup")
})

app.post("/signup",async (req,res)=>{
    // console.log(req.body)
    const {username,email,password} = req.body;
    const hashPassword = await bcrypt.hash(password,10);

    let existingUser = await Users.findOne({username})
    if(existingUser){
        res.redirect("/signup")
    }
    else{
        await Users.create({username,email,password:hashPassword})
        res.redirect('/login');
    }
})

let isAuth = (req,res,next)=>{
    
}

app.get('/payment',isAuth,(req,res)=>{
    res.send("PAYMENT PAGE")
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
            //password verify;
            // create session sid
            res.redirect('/payment')
        }
        else{
            res.redirect('/login')
        }
    }
    else{
        res.redirect("/login")
    }
}) 

const PORT = 5000;
app.listen(PORT,()=>{
    console.log("Server run at port",PORT);
})