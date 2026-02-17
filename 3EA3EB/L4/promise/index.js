let pr = new Promise((res,rej)=>{
    setTimeout(()=>{
        // res("Promise resolved data");
        let arr = [30,300,500,650];
        res(arr);
    },4000)
    //  setTimeout(()=>{
    //     rej("Promise rejected data");
    // },4000)
})

console.log(pr);
console.log("Start")
pr
    .then((data)=>{
        console.log(data);
        let x = data.map((item)=>{
            return item-20;
        })
        return x;
    })
    .then((y)=>{
        console.log(y);
    })
    .catch((err)=>{
        console.log(err);
    })

console.log("End");
