const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const todos = ["cricket","coding","dance","workout"];


app.get('/todos',(req,res)=>{
    res.json({todos});
})


const PORT = 5000;
app.listen(PORT);