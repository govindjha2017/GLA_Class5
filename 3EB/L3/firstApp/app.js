const expresss = require('express');
const app = expresss()

app.get('/',(req,res)=>{
    res.send("this is my home page")
})

app.get('/about',(req,res)=>{
    res.send("about page")
})

app.get('/project',(req,res)=>{
    res.send('project page')
})

app.get('/cat',(req,res)=>{
    res.send('Meowww')
})

// app.get('/products/1',(req,res)=>{
//     res.send('ok')
// })
// app.get('/products/5',(req,res)=>{
//     res.send('ok')
// })

app.get('/products/:id',(req,res)=>{
    // console.log(req.params);
    // res.send('ok')
    res.send(`you want to view product with id ${req.params.id}`)
})

app.get('/users/:username/:password',(req,res)=>{
    // let username = req.params.username;
    // let password = req.params.password;
    let {username,password} = req.params
    console.log(username,password);
    res.send('ok');
})

app.get(/.*/,(req,res)=>{
    res.send('404 page not found')
})

app.listen(4000);
