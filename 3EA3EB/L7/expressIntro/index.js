const express = require('express');
const app = express();
const path = require('path')

app.get('/',(req,res)=>{
    res.send("Home page");
})

app.get('/about',(req,res)=>{
    res.status(200).send("About page")
})

app.get('/cat',(req,res)=>{
    res.status(201).send("first cat routes")
})
app.get('/cat',(req,res)=>{
    res.send("second cat routes")
})

// app.get('/products/1',(req,res)=>{
//     res.send("product of id 1")
// })
// app.get('/products/2',(req,res)=>{
//     res.send("product of id 2")
// })

app.get('/products/:id',(req,res)=>{
    const {id} = req.params;
    res.send(`product of id ${id}`);
})

app.get('/getdata',(req,res)=>{
    console.log(req.query);
    const {name} = req.query
    res.send(`your name is ${name}`);
})

app.get('/api',(req,res)=>{
    res.json({name:"rahul"},{age:24});
})

app.get('/kuchhbhi',(req,res)=>{
    res.send(`<h2>kuchh bhi</h2>`)
})

app.get('/file',(req,res)=>{
    const loc = path.join(__dirname,"index.html")
    res.sendFile(loc)
})


app.get(/.*/,(req,res)=>{
    res.status(404).send("404 page not found")
})

const PORT = 5000;
app.listen(PORT);