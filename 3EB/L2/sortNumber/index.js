const fs = require('fs');
const path = require('path');

function getData(fileName){
    return new Promise((resolve, reject) => {
        const loc = path.join(__dirname,'data',fileName)
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
                let data1 = x.split('\r\n')
                let data2 = y.split('\r\n')
                let finalData = [...data1,...data2]
                // console.log(finalData);
                finalData.sort((a,b)=> a-b);
                let loc = path.join(__dirname,'data','output.txt');
                let outputData = finalData.join('\r\n')
                fs.writeFile(loc,outputData,(err)=>{
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log('done')
                    }
                })
            })
    })
    .catch((err)=>{

    })