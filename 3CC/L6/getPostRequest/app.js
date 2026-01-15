const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.send('working fine')
})

app.get('/signup',(req,res)=>{
    res.render('signup');
})

app.get('/abcd',(req,res)=>{
    console.log(req.query);
    res.send('ok');
})

app.get('/login',(req,res)=>{
    res.render('login')
})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('server run at port ',PORT);
})