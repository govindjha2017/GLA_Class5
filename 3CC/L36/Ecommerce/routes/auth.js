const express = require("express");
const router = express.Router();
const User = require("../model/User");
const passport = require("passport");

router.get('/signup',(req,res)=>{
    res.render("auth/signup")
})

router.post("/signup",async (req,res)=>{
    // console.log(req.body);
    const {username,password,email,role} = req.body;
    
    let newUser = new User({username,email,role});

    await User.register(newUser,password);

    res.redirect("/login")
})

router.get("/login",(req,res)=>{
    res.render("auth/login")
})


router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/products');
  });
module.exports = router;