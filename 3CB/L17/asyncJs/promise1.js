
function kalMilneAayega(x){
    return new Promise((resolve, reject) => {
         setTimeout(()=>{
            if(x){
                resolve("to main tujhe party dunga !")
            }
            else{
                reject("chalo koi nhi")
            }
         },5000)
    })
}
console.log("Start");
kalMilneAayega(true)
    .then((data)=>{
        console.log(data);
    })
    .catch((data)=>{
        console.log(data);
    })

console.log("End");