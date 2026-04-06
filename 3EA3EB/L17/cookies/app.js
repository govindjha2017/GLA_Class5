const express= require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser("qwerasdf"))

app.get('/',(req,res)=>{
    res.send("Home PAGE")
})

// app.get('/store',(req,res)=>{
//     res.cookie("name","qwer");
//     res.cookie("discount",5000);

//     res.send("You visted on store routes");
// })

// app.get('/buy',(req,res)=>{
//     let price = 20000;
//     console.log(req.cookies);
//     let {discount} = req.cookies;
//     let finalPrice;
//     if(discount){
//         finalPrice=price-discount;
//     }
//     else{
//         finalPrice=price;
//     }
//     res.send(`Total price ${finalPrice}`)
// })


app.get('/store',(req,res)=>{
    res.cookie("name","qwer");
    res.cookie("discount",5000,{signed:true});

    res.send("You visted on store routes");
})

app.get('/buy',(req,res)=>{
    let price = 20000;
    console.log(req.signedCookies);
    let {discount} = req.signedCookies;
    let finalPrice;
    if(discount){
        finalPrice=price-discount;
    }
    else{
        finalPrice=price;
    }
    res.send(`Total price ${finalPrice}`)
})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log("Server run at port",PORT);
})