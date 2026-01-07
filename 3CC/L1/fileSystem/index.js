const fs = require('fs');
const path = require('path');

// console.log(__dirname);

const loc = path.join(__dirname,'temp.txt')
console.log(loc);

const data = "this is temp string data"

fs.writeFile(loc,data,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('file written succesfully');
    }
})