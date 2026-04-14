const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("passport");

router.get("/signup",(req,res)=>{
    res.render("auth/signup");
})

router.post('/signup',async (req,res)=>{
    // console.log(req.body);
    const {username,password,role,email} = req.body;

    let user = new User({username,role,email});

    await User.register(user,password);

    res.redirect("/login")
})

router.get('/login',(req,res)=>{
    res.render("auth/login")
})

router.post('/login', passport.authenticate('local', {
  successRedirect: '/products',
  failureRedirect: '/login'
}));

module.exports = router;