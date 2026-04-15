const express = require("express");
const app = express();

const session = require("express-session");



app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie:{
    maxAge: 5*60*1000
  }
}))

app.get("/",(req,res)=>{
    console.log(req.session);
    res.send("HOME PAGE")
})

app.get("/set",(req,res)=>{

    req.session.user="abcd123"
    res.send("set routes hit!")
})



app.listen(4000,()=>{
    console.log("Server run at port 4000");
})