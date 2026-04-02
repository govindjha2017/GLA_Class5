const inp = document.getElementById("inp");
const btn = document.getElementById("btn");

btn.addEventListener("click",async ()=>{
    
    let res = await axios.post("http://localhost:3000/shorturl",{orignalUrl:inp.value});

    console.log(res);

})
