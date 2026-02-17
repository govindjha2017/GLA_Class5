
// async function fun(){
//     return "Hello";
// }

// let x= fun();
// console.log(x);.


function abc(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("kuchh bhi")
        },4000)
    })
}

async function fetchData(){
    //  abc()
    //     .then((data)=>{
    //         console.log(data);
    //     })
    console.log("hello");
    let x = await abc();
    console.log(x);
    console.log("World")
}
console.log("start")
fetchData()
console.log("End");