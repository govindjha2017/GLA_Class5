const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('home page')
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
    res.send('ok');
})

app.get('/getData',(req,res)=>{
    console.log(req.query);
    res.send("this is geData routes")
})

const movies = [
    {
        name:'avanger',
        rating:8.5
    },
    {
        name:'batman',
        rating:7.5
    },
    {
        name:'pushpa',
        rating:9.5
    },
    {
        name:'bahubali',
        rating:9.3
    },
]

app.get('/getMovies',(req,res)=>{
    console.log(req.query);
    let name = req.query.name;
    let data = movies.find((item)=> item.name==name)
    if(data){
        res.json(data);
    }
    else{
      res.send('movie not found')
    }
})


app.get('/cat',(req,res)=>{
    res.send('Meowww 1')
})
app.get('/cat',(req,res)=>{
    res.send('Meowww 2')
})

// in express 4 version
// app.get('*',(req,res)=>{
//     res.send("404 page not found")
// })

app.get(/.*/,(req,res)=>{
    res.send("404 page not found")
})

app.listen(5000,()=>{
    console.log('server run at port 5000')
})