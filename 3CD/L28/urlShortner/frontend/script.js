const inp = document.getElementById("inp")
const btn = document.getElementById("btn");

btn.addEventListener("click",async()=>{
    let res = await axios.post("http://localhost:3000/shorturl",{orignalUrl:inp.value});

    console.log(res);
    console.log(res.data.shortUrl);

    const link = document.getElementById("link");

    link.innerText = res.data.shortUrl;
    link.setAttribute("href",res.data.shortUrl);

    const result = document.getElementById("result");

    result.classList.remove("hidden")
})