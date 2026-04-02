const express = require("express");
const app = express();
const Url = require("./models/Url")
const mongoose = require("mongoose");
const cors = require("cors");
const validUrl = require("valid-url");
const shortId = require("shortid");

app.use(cors());
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/url_CD")
    .then(()=>{console.log("DB conected !")})
    .catch(()=>{console.log("DB not conected")})

app.post('/shorturl',async (req,res)=>{
    
    console.log(req.body);
    const {orignalUrl} = req.body;

    if(!validUrl.isUri(orignalUrl)){
        return res.status(400).json({msg:"Invalid Url"});
    }

    let existing = Url.findOne({orignalUrl})

    if(existing){
        return res.status(200).json({msg:"URL allready exist",shortUrl:`localhost:3000/${existing.shortCode}`})
    }

    let shortCode = shortId.generate();

    await Url.create({orignalUrl,shortCode})
    
    return res.status(200).json({msg:"ShortUrl completed" , shortUrl:`localhost:3000/${shortCode}`})
})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log("server run at port",PORT);
})