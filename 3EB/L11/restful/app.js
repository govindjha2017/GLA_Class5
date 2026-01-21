const express = require('express');
const app = express();
const users = require('./data/users')
const path = require('path');
const methodOverride = require('method-override');


app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

app.get('/',(req,res)=>{
    res.send('Home page')
})

app.get('/users',(req,res)=>{
    res.render('users',{users})
})

app.get('/user/new',(req,res)=>{
    res.render('new')
})

app.post('/users',(req,res)=>{
    const {name,password,age,city} = req.body
    let id;
    if(users.length==0){
        id=1
    }
    else{
        id=users[users.length-1].id+1
    }
    users.push({
        id,
        name,password,age,city
    })

    res.redirect('/users')
})

app.get('/users/:id',(req,res)=>{
    // const id = req.params.id
    const {id} = req.params;
    let user = users.find((item)=> item.id==id)
    res.render('show',{user})
})

app.get('/users/:id/edit',(req,res)=>{
    // const id = req.params.id
    const {id} = req.params;
    let user = users.find((item)=> item.id==id)
    res.render('edit',{user})
})
app.patch('/users/:id',(req,res)=>{
    const {id} = req.params;
    let user = users.find((item)=> item.id==id);
    const {name,password,age,city} = req.body;
    user.name=name;
    user.password=password;
    user.city=city;
    user.age=age;
    res.redirect('/users')
})

app.delete('/users/:id',(req,res)=>{
    const {id} = req.params;
    let user = users.find((item)=> item.id==id);
    let ind = users.indexOf(user);
    users.splice(ind,1);
    res.redirect('/users')
})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('server run at port',PORT);
})