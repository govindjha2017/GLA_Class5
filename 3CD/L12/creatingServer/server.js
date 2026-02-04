const http = require('http');
const path = require('path');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
    if(url=="/" && method=="GET"){
        res.end("HOME PAGE")
    }
    else if(url=="/about" && method=="GET"){
        res.end("ABout page")
    }
    else if(url=="/file" && method=="GET"){
        const filePath = path.join(__dirname,"views","index.html")
        fs.createReadStream(filePath).pipe(res);
    }
    else if(url=="/style.css" && method=="GET"){
        const cssFilePath = path.join(__dirname,"public","style.css")
        fs.createReadStream(cssFilePath).pipe(res);
    }
    else{
        res.end("404 page not found")
    }
})

server.listen(5000,()=>{
    console.log("server run at port 5000")
})