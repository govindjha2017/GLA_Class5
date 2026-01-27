const express = require('express');
const app = express();
const path = require('path');
const users = require('./data/users');
const methodOverride = require('method-override')

app.use(methodOverride('_method'))
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
    let id;
    if(users.length==0){
        id=1
    }
    else{
        id=users[users.length-1].id+1;
    }
    users.push({
        id,
        name,age,city,password
    })
    res.redirect('/users')
})

app.get('/users/:id',(req,res)=>{
    const {id} =req.params;
    const user = users.find((item)=> item.id==id);
    res.render('show',{user})

})

app.get('/users/:id/edit',(req,res)=>{
    const {id} = req.params;
    const user = users.find((item)=> item.id==id);
    res.render('edit',{user})
})

app.patch('/users/:id',(req,res)=>{
    const {id} = req.params;
    const user = users.find((item)=> item.id==id);
    const {name,password,age,city} = req.body;
    user.name=name;
    user.password=password;
    user.age=age;
    user.city=city;
    res.redirect('/users')
})

app.delete('/users/:id',(req,res)=>{
    const {id} = req.params;
    const user = users.find((item)=> item.id==id);
    const ind = users.indexOf(user);
    users.splice(ind,1);
    res.redirect('/users');
})

app.listen(5000,()=>{
    console.log('server run at port 5000');
})