const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send("home page")
})

app.get('/getdata',(req,res)=>{
    console.log(req.query);
    res.send('ok')
})

let movies = [
    {
        name:'avanger',
        rating: 8.5
    },
    {
        name:'kgf',
        rating: 7.5
    },
    {
        name:'dhurandhar',
        rating: 6.5
    },
    {
        name:'pushpa',
        rating: 9.5
    },
    
]

app.get('/getmovie',(req,res)=>{
    let name = req.query.name;
    let data = movies.find((item)=> item.name==name)
    if(data){
        res.json(data)
    }
    else{
        res.send('movie does not exits')
    }
    

})


app.get('/temp',(req,res)=>{
    res.send(`<h1>This is tmp routes</h1>`)
})

const path = require('path');
const loc = path.join(__dirname,'index.html')

app.get('/file',(req,res)=>{
    res.sendFile(loc)
})

app.listen(4000,()=>{
    console.log('server run on port 4000')
})