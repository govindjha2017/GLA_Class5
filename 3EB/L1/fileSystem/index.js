const fs = require('fs');
const path = require('path');

const data = "This is temp string data";

// console.log(__dirname);

const loc = path.join(__dirname,'file1.txt');

// fs.writeFile(loc,data,(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log('file written succesfully');
//     }
// })

const loc1 = path.join(__dirname,'temp.txt');

fs.readFile(loc1,{encoding:'utf-8'},(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        // console.log(data.toString());
        console.log(data)
    }
})