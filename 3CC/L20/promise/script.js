let pr =  new Promise((res, rej) => {
    setTimeout(()=>{
        // res("promise resolved Data")
        let data = [30,500,550,60];
        res(data);
    },4000)
    // setTimeout(()=>{
    //     rej("promise rejected data")
    // },4000)
})

// console.log(pr);
console.log("Start")
pr
    .then((x)=>{
        console.log(x);
        let mapArr = x.map((item)=>{
            return item-20
        })
        return mapArr
    })
    .then((mapArr)=>{
        console.log(mapArr);
    })
    .catch((x)=>{
        console.log(x);
    })

console.log("End");


 