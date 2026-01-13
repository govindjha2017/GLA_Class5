const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send('Home page')
})

// app.get('/products/1',(req,res)=>{
//     res.send('ok');
// })

// app.get('/products/2',(req,res)=>{
//     res.send('ok');
// })

app.get('/products/:id',(req,res)=>{
    console.log(req.params);
    const productId = req.params.id;
    res.send(`you are viewing product of id ${productId}`);
})

app.get('/getdata',(req,res)=>{
    console.log(req.query);
    res.send('ok');
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
        rating:8.1
    },
]

app.get('/getmovie',(req,res)=>{
    // console.log(req.query);
    let name = req.query.name;
    console.log(name)

    let movieData = movies.find((item)=> item.name==name);
    if(movieData){
        res.json(movieData)
    }
    else{
        res.send('movie not found')
    }

    // res.send('ok')
})


const PORT = 4000;
app.listen(PORT,()=>{
    console.log('server run at port',PORT);
})