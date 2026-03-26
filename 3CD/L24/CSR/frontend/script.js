
const API = "http://localhost:5000/todos";

const list = document.querySelector("#list");

// fetch(API)
//     .then((res)=>{
//         // console.log(res);
//         return res.json()
//     })
//     .then((datas)=>{
//         console.log(datas);
//         for(let data of datas.todos){
//             const li = document.createElement("li");
//             li.innerText=data;
//             list.append(li);
//         }
//     })


let fetchData = ()=>{
    list.innerText=""
    axios.get(API)
    .then((res)=>{
        console.log(res);
         for(let data of res.data.todos){
            const li = document.createElement("li");
            li.innerText=data;
            list.append(li);
        }
    })
}
fetchData();

const inp = document.getElementById("inp");
const btn = document.getElementById("btn");

btn.addEventListener("click",async ()=>{
    console.log(inp.value);

   await axios.post(API,{todo:inp.value})
   fetchData()
})