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
        res.end("about page")
    }
    else if(url=="/project" && method=="GET"){
        const filePath = path.join(__dirname,"views","project.html");
        fs.createReadStream(filePath).pipe(res);
    }
    else if(url=="/style.css" && method=="GET"){
        const filePath = path.join(__dirname,"public","style.css");
        fs.createReadStream(filePath).pipe(res);
    }
    else{
        res.end("404 page not found")
    }

})

const PORT = 4400;
server.listen(PORT,()=>{
    console.log('server run at port 4400')
});