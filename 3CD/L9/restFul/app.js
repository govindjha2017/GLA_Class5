const express = require('express');
const app = express();
const users = require('./data/users');

app.set('view engine','ejs');
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('Home page');
})

app.get('/users',(req,res)=>{
    res.render('index',{users})
})

app.get('/user/new',(req,res)=>{
    res.render('new');
})

app.post('/users',(req,res)=>{
    let id;
    if(users.length==0){
        id=1
    }
    else{
        id=users[users.length-1].id+1
    }
    const {name,age,password,city} = req.body;
    users.push({
        id,name,password,age,city
    });
    res.redirect('/users')
})

app.get('/users/:id',(req,res)=>{
    const {id} = req.params;
    const user = users.find((item)=> item.id==id);
    res.render('show',{user})
})

app.get('/users/:id/edit',(req,res)=>{
    const {id} = req.params;
    const user = users.find((item)=> item.id==id);
    res.render('edit',{user})
})

app.listen(5000,()=>{
    console.log('server run at port 5000');
})