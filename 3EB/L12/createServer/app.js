const http = require('http');

const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
    if(url=="/" && method=="GET"){
        res.end("HOME PAGE")
    }
    else if(url=="/about" && method=="GET"){
        res.end("About page")
    }
    else{
        res.end("404 page not dound")
    }
})

server.listen(4000,()=>{
    console.log('server run at port 4000')
})