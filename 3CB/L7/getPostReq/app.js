const express = require('express');
const app = express();

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('Home page');
})

app.get('/signup',(req,res)=>{
    res.render('signup')
})

app.get('/abcd',(req,res)=>{
    console.log(req.query);
    res.send('ok');
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/abcd',(req,res)=>{
    console.log(req.body);
    res.send('ok')
})

const todos = ['game','dance','code','music']

app.get('/todos',(req,res)=>{
    res.render('todos',{todos})
})

app.listen(4000,(req,res)=>{
    console.log('server run at port 4000')
})