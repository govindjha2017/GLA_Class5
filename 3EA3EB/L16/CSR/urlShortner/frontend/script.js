const inp = document.getElementById("inp");
const btn = document.getElementById("btn");

btn.addEventListener("click",async ()=>{
    
    let res = await axios.post("http://localhost:3000/shorturl",{orignalUrl:inp.value});

    console.log(res);
    const shortUrl = res.data.shortUrl;

    console.log(shortUrl);

    const link = document.getElementById("link");
    
    link.innerText=shortUrl

    link.setAttribute("href",shortUrl);
    
    const result = document.getElementById("result");

    result.classList.remove("hidden");


})
