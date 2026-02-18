
// async function fun(){
//     return "Hello";
// }

// let x = fun();
// console.log(x);

function abc(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("kuchh bhi")
        },4000)
    })
}

// abc()
//     .then((x)=>{
//         console.log(x);
//     })
//     .catch((err)=>{
//        console.log(err);
//     })
console.log("Start")
async function fetchData(){
    console.log("inside function")
    let x = await abc();
    console.log("World");
    console.log(x);
}
console.log("Hello")
fetchData();
console.log("End")