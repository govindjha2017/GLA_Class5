const express = require("express");
const app = express();
const session = require("express-session");

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.get('/',(req,res)=>{
    console.log(req.session);
    res.send("HOME PAGE")
})

app.get('/login',(req,res)=>{
    req.session.user= "abcd1234";
    res.send("login done")
})


app.listen(4000,()=>{
    console.log("Server run at port 4000")
});