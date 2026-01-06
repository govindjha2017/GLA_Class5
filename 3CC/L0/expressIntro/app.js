const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello from my first express app");
})

app.get('/about',(req,res)=>{
    res.send("this is my about page")
})


app.listen(4000);