const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Url = require("./models/Url");
const cors = require("cors");
const validUrl = require('valid-url');
const shortid = require('shortid');

app.use(cors({}));
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/url_hons")
    .then(()=>{console.log("DB conected")})
    .catch(()=>{console.log("Db not conected")})

app.post("/shorturl",async(req,res)=>{
    console.log(req.body);
    const {orignalUrl} = req.body;
    if(!validUrl.isUri(orignalUrl)){
        res.status(400).json({msg:"Invalid URL"})
    }
    let existing = await Url.findOne({orignalUrl})
    if(existing){
        res.status(200).json({msg:"existing url",shortUrl:`localhost:3000/${existing.existing}`});
    }

    let shortCode = shortid.generate();

    await Url.create({orignalUrl,shortCode});

    res.send("ok");
})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log("server run at port",PORT);
})