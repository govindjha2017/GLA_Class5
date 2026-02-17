// console.log("start");

// setTimeout(()=>{
//     console.log("Mid")
// },5000)

// console.log("End");


console.log("start");
let x = new Date().getTime();
// console.log(x);

setTimeout(()=>{
    console.log("Mid-1")
},4000)

while(new Date().getTime()<x+10000){

}

// setTimeout(()=>{
//     console.log("Mid-2")
// },0)

console.log("End");
