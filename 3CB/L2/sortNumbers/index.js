const fs = require('fs');
const path = require('path');

function getData(fileName){
    return new Promise((resolve, reject) => {
        const loc = path.join(__dirname,'data',fileName);
        fs.readFile(loc,{encoding:'utf-8'},(err,data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}


getData('input1.txt')
    .then((x)=>{
        getData('input2.txt')
            .then((y)=>{
                 let data1 = x.split(' ');
                 let data2 = y.split(' ');
                 let finalData = [...data1 ,...data2];
                 finalData.sort((a,b)=> a-b)
                
                 let outputData = finalData.join(' ');
                 console.log(outputData);
            })
    })
    .catch((err)=>{

    })