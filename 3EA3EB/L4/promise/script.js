
function kalMilneAayega(x){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(x){
                resolve("theek hai main tujhe party dunga!");
            }
            else{
                reject("chalo koi nhi!");
            }
        },3000)
    })
}


kalMilneAayega(!true)
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })