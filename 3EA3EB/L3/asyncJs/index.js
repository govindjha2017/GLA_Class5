
// console.log("start");

// setTimeout(()=>{
//     console.log("mid");
// },5000)

// console.log("end");


// console.log("start");

// setTimeout(()=>{
//     console.log("mid");
// },0)

// console.log("end");



console.log("start");

setTimeout(()=>{
    console.log("mid");
},5000)

let x = new Date().getTime();
// console.log(x);
console.log("hello");
while(new Date().getTime()<x+10000){

}
console.log("end");



// setTimeout(()=>{
//     console.log("A");
//     setTimeout(()=>{
//         console.log("B");
//         setTimeout(()=>{
//             console.log("C");
//         },2000)
//     },3000)
// },5000)