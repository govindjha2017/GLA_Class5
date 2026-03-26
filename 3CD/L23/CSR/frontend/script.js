
const API = "http://localhost:5000/todos";

const list = document.querySelector("#list");

fetch(API)
    .then((res)=>{
        // console.log(res);
        return res.json()
    })
    .then((datas)=>{
        console.log(datas);
        for(let data of datas.todos){
            const li = document.createElement("li");
            li.innerText=data;
            list.append(li);
        }
    })
