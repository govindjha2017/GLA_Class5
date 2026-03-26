const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
const todos = ["cricket","coding","dance","workout"];

// app.use(express.urlencoded({extended:true}))

app.use(express.json())

app.get('/todos',(req,res)=>{
    res.json({todos});
})

app.post("/todos",(req,res)=>{
    console.log(req.body);
    let data = req.body.todo
    todos.push(data)
    res.status(200).json({msg:"data added"})
})

const PORT = 5000;
app.listen(PORT);