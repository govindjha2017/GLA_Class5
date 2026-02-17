console.log("Start");
setTimeout(()=>{
    console.log("Mid");
    setTimeout(()=>{
        console.log("kuchh bhi")
    },10000)
},4000)

setTimeout(()=>{
    console.log("hello");
},0)

let x = new Date().getTime();

while(new Date().getTime() < x+10000){

}
console.log("End");
