const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('My first express app')
})

app.get('/about',(req,res)=>{
    res.status(200).send('about page')
})

app.get('/contact',(req,res)=>{
    res.send('This is contact page')
})

app.get('/cat',(req,res)=>{
    res.send('Meowwww! 1')
})

app.get('/cat',(req,res)=>{
    res.send('Meowwww! 2')
})

// not work in express 5 version but work in 4 version
// app.get('*',(req,res)=>{
//     res.send('404 page not found')
// })

app.get(/.*/,(req,res)=>{
    res.status(404).send('404 page not found')
})

app.listen(4000)