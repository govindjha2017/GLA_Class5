const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')))

// app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('home')
})

app.listen(4000,()=>{
    console.log('server run at port 4000');
})