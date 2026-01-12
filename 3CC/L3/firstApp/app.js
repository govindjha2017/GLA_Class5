const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("This is my home page")
})

app.get('/about',(req,res)=>{
    res.send("about page")
})

app.get('/cat',(req,res)=>{
    res.send('Meowwww!')
})

app.get('/payment',(req,res)=>{
    res.send(`<h1>This is payment page</h1>`)
})

app.listen(4000)