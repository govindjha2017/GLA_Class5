const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Working fine!')
})

app.get('/about',(req,res)=>{
    res.send('About page')
})

// app.get('/products/1',(req,res)=>{
//     res.send('ok')
// })

// app.get('/products/2',(req,res)=>{
//     res.send('ok')
// })

app.get('/products/:x',(req,res)=>{
    console.log(req.params);
    const id = req.params.x;
    res.send(`you want to view product of id ${id} `);
})

app.get('/getData',(req,res)=>{
    console.log(req.query);
    res.send('ok');
})

app.get(/.*/,(req,res)=>{
    res.send('404 page not found')
})

app.listen(5000,()=>{
    console.log('server run at port 5000')
})