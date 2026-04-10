const express = require("express");
const app = express();

const cookieParser = require('cookie-parser')
app.use(cookieParser(`qwer1234`))

app.get("/",(req,res)=>{
    res.send("HOME PAGE")
})

// app.get('/store',(req,res)=>{
//     res.cookie("name","asdf1234");
//     res.cookie("mode","dark");
//     res.cookie("discount",5000);
//     res.send("ok")
// })

// app.get('/buy',(req,res)=>{
//     console.log(req.cookies);

//     let price = 20000;
//     const {discount} = req.cookies;
//     let finalPrice;
//     if(discount){
//         finalPrice= price-discount;
//     }
//     else{
//         finalPrice = price;
//     }

//     res.send(`Total price = ${finalPrice}`);
// })

app.get('/store',(req,res)=>{
    res.cookie("name","asdf1234");
    res.cookie("mode","dark");
    res.cookie("discount",5000,{signed:true});
    res.send("ok")
})

app.get('/buy',(req,res)=>{
    console.log(req.signedCookies);

    let price = 20000;
    const {discount} = req.signedCookies;
    let finalPrice;
    if(discount){
        finalPrice= price-discount;
    }
    else{
        finalPrice = price;
    }

    res.send(`Total price = ${finalPrice}`);
})

const PORT = 4000;
app.listen(PORT,()=>{
    console.log("server run at port",PORT);
})