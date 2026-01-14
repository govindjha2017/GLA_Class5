const exxpress = require('express');
const app = exxpress();
const path = require('path');

app.get('/',(req,res)=>{
    res.send('This is my first express app')
})

app.get('/about',(req,res)=>{
    res.send("About page")
})

app.get('/cat',(req,res)=>{
    res.send('Meowwww 1!')
})
app.get('/cat',(req,res)=>{
    res.send('Meowwww 2!')
})

app.get('/payment',(req,res)=>{
    res.send(`<h1>This is my payment page</h1>`)
})
const loc = path.join(__dirname,'index.html')
app.get('/file',(req,res)=>{
    res.sendFile(loc)
})

app.get(/.*/,(req,res)=>{
    res.send("404 ppage not found");
})


app.listen(4000)