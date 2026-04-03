const express = require("express");
const app = express();
const cors = require("cors");
const validUrl = require("valid-url");
const shortId = require("shortid");
const Url = require("./models/Url")

app.use(cors())
app.use(express.json())

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/url_CB")
    .then(()=>{console.log("DB Conected")})
    .catch(()=>{console.log("DB not conected")})

app.post("/shorturl",async (req,res)=>{
    // console.log(req.body);
    
    try{
        const {orignalUrl} = req.body;

        if(!validUrl.isUri(orignalUrl)){
            return res.status(400).json({msg:"Invalid URL"})
        }
        let existing = await Url.findOne({orignalUrl});
        if(existing){
            return res.status(200).json({msg:"URL allready exist",shortUrl:`http://localhost:3000/${existing.shortCode}`})
        }

        let shortCode = shortId.generate();

        await Url.create({orignalUrl,shortCode})
        
        return res.status(200).json({msg:"short url genrated",shortUrl:`http://localhost:3000/${shortCode}`})
    } catch{
        return res.status(500).json({msg:"Something went wrong"})
    }
})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log("Server run at port",PORT)
})