const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')

app.use(cookieParser("asdfgqwer"))

app.get("/",(req,res)=>{
    res.send("HOME PAGE")
})

// app.get('/store',(req,res)=>{
//     res.cookie("name","qwer")
//     res.cookie("discount",5000);
//     res.send("You visied on the store routes")
// })

// app.get('/buy',(req,res)=>{
//     let price = 20000;
//     console.log(req.cookies);
//     let {discount} = req.cookies;
//     let finalPrice;
//     if(discount){
//         finalPrice = price-discount;
//     }else{
//         finalPrice=price;
//     }

//     res.send(`total price = ${finalPrice}`)
// })

app.get('/store',(req,res)=>{
    res.cookie("name","qwer")
    res.cookie("discount",5000,{signed:true});
    res.send("You visied on the store routes")
})

app.get('/buy',(req,res)=>{
    let price = 20000;
    console.log(req.signedCookies);
    let {discount} = req.signedCookies;
    let finalPrice;
    if(discount){
        finalPrice = price-discount;
    }else{
        finalPrice=price;
    }

    res.send(`total price = ${finalPrice}`)
})

const PORT = 4000;
app.listen(PORT,()=>{
    console.log("server run at port",PORT);
})