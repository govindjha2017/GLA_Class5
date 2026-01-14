const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.send('Workling fine!')
})

app.get('/about',(req,res)=>{
    res.send(`<h1>this is about page</h1>`)
})
const loc = path.join(__dirname,'index.html')
app.get('/abc',(req,res)=>{
    res.sendFile(loc)
})

app.get('/product',(req,res)=>{
    res.render('hello')
})

app.get('/payment',(req,res)=>{
    res.render('payment')
})

const todos = ['game','coding','dance'];

app.get('/todos',(req,res)=>{
    res.render('todo',{todos})
})

app.listen(4000,()=>{
    console.log('server run at port 4000')
})