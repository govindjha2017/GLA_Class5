const fs = require('fs');
const path = require('path');

const data = "Hello World!";

// const loc = path.join(__dirname,'abc.txt');
// console.log(__dirname);
const loc = path.join(__dirname,'data','hello.txt');
// fs.writeFile(loc,data,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("File written succesfully")
//     }
// })

fs.readFile(loc,{encoding:'utf-8'},(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        // console.log(data.toString());
         console.log(data);
    }
})