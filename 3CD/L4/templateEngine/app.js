const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.send('home page')
})
app.get('/about',(req,res)=>{
    res.send('<h1>about page</h1>')
})
const loc = path.join(__dirname,'index.html')
app.get('/file',(req,res)=>{
    res.sendFile(loc)
})

app.get('/profile',(req,res)=>{
    res.render('profile')
})

app.get('/payment',(req,res)=>{
    res.render('abc')
})

const todos = ['game','coding','dance','music']

app.get('/todos',(req,res)=>{
    res.render('todo',{todos})
})

app.listen(4000,()=>{
    console.log('server run at port 4000')
})