const express = require('express');
const app = express();

const methodOverride = require('method-override');
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/SSR-CD")
    .then(()=>{console.log("DB conected!")})
    .catch(()=>{console.log("DB not conected!")})

const Users = require("./model/users")

app.use(methodOverride('_method'))
app.set('view engine','ejs');
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/users',async (req,res)=>{
    let users = await Users.find({})
    res.render('index',{users})
})

app.get('/user/new',(req,res)=>{
    res.render('new');
})

app.post('/users',(req,res)=>{
    const {name,age,password,city} = req.body;
    Users.create({name,age,password,city})
    res.redirect('/users')
})

app.get('/users/:id',async (req,res)=>{
    const {id} = req.params;
    const user = await Users.findById(id);
    res.render('show',{user})
})

app.get('/users/:id/edit',async(req,res)=>{
    const {id} = req.params;
    const user = await Users.findById(id);
    res.render('edit',{user})
})

app.patch('/users/:id',async(req,res)=>{
    const {name,age,password,city} = req.body;
    const {id} = req.params;
    await Users.findByIdAndUpdate(id,{name,age,password,city})
    res.redirect('/users')
})

app.delete('/users/:id',async(req,res)=>{
    const {id} = req.params;
    await Users.findByIdAndDelete(id);
    res.redirect('/users')
})

app.listen(5000,()=>{
    console.log('server run at port 5000');
})
