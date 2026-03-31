const express = require("express");
const app = express();

const todos = ["gaming","cricket","dance","reels","coding"];


app.get('/todos',(req,res)=>{
    res.json({
        todos:todos
    })
})


const PORT = 5000;
app.listen(PORT,()=>{
    console.log("server run at port",PORT)
})