const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.send("Home page")
})

app.get('/abc',(req,res)=>{
    res.render('about')
})
app.get('/projects',(req,res)=>{
    res.render('project')
})

app.listen(4000);