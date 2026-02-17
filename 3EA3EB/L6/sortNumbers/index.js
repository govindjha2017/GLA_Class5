const fs = require('fs');
const path = require('path');

function fetchData(fileName){
    return new Promise((resolve, reject) => {
        const loc = path.join(__dirname,"data",fileName)
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

fetchData('input1.txt')
    .then((data)=>{
        // console.log(data);
        let data1 = data.split(" ");
        // console.log(data1);
        fetchData("input2.txt")
            .then((x)=>{
                let data2 = x.split(" ");
                // console.log(data2);
                let finalData = [...data1,...data2];
                finalData.sort((a,b)=>a-b);
                let outputData = finalData.join(" ");
                // console.log(outputData);
                let outputLoc = path.join(__dirname,"data","output.txt")
                fs.writeFile(outputLoc,outputData,(err)=>{
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log("DONE")
                    }
                })
            })
    })