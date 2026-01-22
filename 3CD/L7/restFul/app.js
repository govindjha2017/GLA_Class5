const express = require('express');
const app = express();
const users = require('./data/users');

app.set('view engine','ejs');
app.use(express.static("public"))

app.get('/',(req,res)=>{
    res.send('Home page');
})

app.get('/users',(req,res)=>{
    res.render('index',{users})
})

app.get('/user/new',(req,res)=>{
    res.render('new');
})

app.listen(5000,()=>{
    console.log('server run at port 5000');
})