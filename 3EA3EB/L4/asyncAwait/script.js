
// async function fun(){
//     return "Hello"
// }

// let x = fun();
// console.log(x);


function abc(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("promise resolved data")
        },3000)
    })
}
console.log("start");
async function fetchData(){
    // abc()
    //     .then((x)=>{
    //         console.log(x);
    //     })
    console.log("hello");
    let x = await abc();
    console.log(x);
    console.log("World")
}

fetchData()
console.log("End");