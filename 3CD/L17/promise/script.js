let pr = new Promise((resolve, reject) => {
   setTimeout(()=>{
         let data = [400,300,200,500];
         resolve(data);
   },4000) 
    // setTimeout(()=>{
    //     reject("promise rejected Data")
    // },4000) 
})

console.log("start");
pr  
    .then((x)=>{
        console.log(x);
        let mapdata = x.map((item)=>{
            return item-50
        })
        return mapdata
    })
    .then((mapdata)=>{
        console.log(mapdata);
    })
    .catch((x)=>{
        console.log(x);
    })

console.log("End");



pr
 .then((data)=>{
    console.log(data);
 })
 .catch((err)=>{
    console.log(err);
 })