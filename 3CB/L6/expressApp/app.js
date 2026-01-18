const express = require('express');
const app = express();
const path = require('path');
app.set('view engine','ejs');

// app.use(express.static('public'))
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/about',(req,res)=>{
    res.render('abc')
})

app.listen(5000,()=>{
    console.log('server run at port 5000');
})