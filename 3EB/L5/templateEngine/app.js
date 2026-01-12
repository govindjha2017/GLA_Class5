const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.send("Working Fine !")
})
const loc = path.join(__dirname,'index.html')
app.get('/file',(req,res)=>{
    res.sendFile(loc)
})

app.get('/about',(req,res)=>{
    res.render('about')
})

const todos = ['coding','gaming','cricket','football']

app.get('/todos',(req,res)=>{
    res.render('todo',{todos})
})

app.listen(5000,()=>{
    console.log("server run at port 5000")
});