let pr = new Promise((resolve, reject) => {
   setTimeout(()=>{
        resolve("Promise resolved data!")
   },4000) 
    // setTimeout(()=>{
    //     reject("promise rejected Data")
    // },4000) 
})

// console.log(pr);

pr  
    .then((x)=>{
        console.log(x);
    })
    .catch(()=>{
        console.log(x);
    })