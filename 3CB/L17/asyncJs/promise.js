let pr = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("promise resolved data")
        let arr = [300,450,670,230];
        resolve(arr);
    },4000)

    // setTimeout(()=>{
    //     reject("promise rejected data")
    // },4000)
})
pr
    .then((x)=>{
        // console.log("hello")
        console.log(x);
        let mapArr = x.map((item)=>{
            return item-30;
        })
        return mapArr;
    })
    .then((mapArr)=>{
        console.log(mapArr);
    })
    .catch((x)=>{
        // console.log("world");
        console.log(x);
    })
