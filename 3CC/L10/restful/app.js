const express = require('express');
const app = express();
const path = require('path');
const users = require('./data/users');

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/users',(req,res)=>{
    res.render('index',{users})
})

app.get('/user/new',(req,res)=>{
    res.render('new');
})

app.post('/users',(req,res)=>{
    const {name,age,password,city} = req.body;
    let id;
    if(users.length==0){
        id=1
    }
    else{
        id = users[users.length-1].id+1
    }
    users.push({
        id,name,password,age,city
    });
    res.redirect('/users')
})

app.get('/users/:id',(req,res)=>{
    const {id} = req.params;
    let user = users.find((item)=> item.id==id);

    res.render('show',{user});
})

app.listen(5000,(req,res)=>{
    console.log('server run at port 5000');
})