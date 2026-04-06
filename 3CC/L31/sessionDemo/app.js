const express = require("express");
const app = express();
const session = require("express-session");


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))

app.get('/',(req,res)=>{
    console.log(req.session);

    res.send("HOME PAGE")
})

app.get('/login',(req,res)=>{
    req.session.user="abcd1234";

    res.send("Login done")
})


const PORT = 5000;
app.listen(PORT,()=>{
    console.log("server run at port ",PORT);
})