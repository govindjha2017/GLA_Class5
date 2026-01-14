const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.send('Working fine!')
})
const loc = path.join(__dirname,'index.html')
app.get('/about',(req,res)=>{
    res.sendFile(loc)
})

app.get('/profile',(req,res)=>{
    res.render('profile')
})

app.get('/payment',(req,res)=>{
    res.render('abc')
})

app.get('/todos',(req,res)=>{
    res.render('todo')
})

app.listen(5000,()=>{
    console.log('server run at port 5000')
})