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
    // console.log(req.body);
    try{
        const {orignalUrl} = req.body;
        if(!validUrl.isUri(orignalUrl)){
            return res.status(400).json({msg:"Invalid URL"})
        }
        let existing = await Url.findOne({orignalUrl})
        if(existing){
            return  res.status(200).json({msg:"existing url",shortUrl:`http://localhost:3000/${existing.shortCode}`});
        }

        let shortCode = shortid.generate();

        await Url.create({orignalUrl,shortCode});

        return  res.status(200).json({msg:"Url sorted",shortUrl:`http://localhost:3000/${shortCode}`});
    } catch{
        return res.status(500).json({msg:"something wentt wrong"})
    }
     
})

app.get("/:shortCode",async (req,res)=>{
    const {shortCode} = req.params;
    const data = await Url.findOne({shortCode});
    data.count++;
    await data.save()

    if(data){
        return res.redirect(data.orignalUrl)
    }
})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log("server run at port",PORT);
})