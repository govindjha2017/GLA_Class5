const express = require('express');
const app = express();
const path = require('path');
const users = require('./data/users');

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')))

app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/users',(req,res)=>{
    res.render('users',{users})
})

app.get('/user/new',(req,res)=>{
    res.render('new')
})

app.post('/users',(req,res)=>{
    console.log(req.body);
    const {name,age,city,password} = req.body;
    users.push({
        id:users[users.length-1].id+1,
        name,age,city,password
    })
    res.redirect('/users')
})

app.get('/users/:id',(req,res)=>{
    const {id} =req.params;
    const user = users.find((item)=> item.id==id);
    res.render('show',{user})

})

app.listen(5000,()=>{
    console.log('server run at port 5000');
})