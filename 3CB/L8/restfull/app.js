const express = require('express');
const app = express();
const path = require('path');
const users = require('./data/users');

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/users',(req,res)=>{
    res.render('users',{users})
})

app.listen(5000,()=>{
    console.log('server run at port 5000');
})