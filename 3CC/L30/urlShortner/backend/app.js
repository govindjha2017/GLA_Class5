const express = require("express");
const app = express();
const Url = require("./models/Url");
const cors = require("cors");
const validUrl = require('valid-url');
const shortid = require('shortid');

app.use(cors());
app.use(express.json())

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/url_cc")
    .then(()=>{console.log("DB conected")})
    .catch(()=>{console.log("DB not conected")})

app.post("/shorturl",async (req,res)=>{
    // console.log(req.body);
    try{
        const {orignalUrl} = req.body;

        if(!validUrl.isUri(orignalUrl)){
            return res.status(400).send({msg:"invalid URL"})
        }

        let existing = await Url.findOne({orignalUrl});

        if(existing){
            return res.status(200).json({msg:"existing url",shortUrl:`http://localhost:3000/${existing.shortCode}`})
        }

        let shortCode = shortid.generate();

        await Url.create({orignalUrl,shortCode})

        return res.status(200).json({msg:"url shorted",shortUrl:`http://localhost:3000/${shortCode}`})
    } catch{
        res.status(500).json({msg:"Internal server error"})
    }

})

app.get('/:shortCode',async (req,res)=>{
    const {shortCode} = req.params;
    let data = await Url.findOne({shortCode});
    data.count++;
    await data.save()
    res.redirect(data.orignalUrl)
})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log("Server run at port",PORT);
})