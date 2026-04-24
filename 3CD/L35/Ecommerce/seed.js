const mongoose = require("mongoose");
const Product = require("./models/product");


mongoose.connect("mongodb://localhost:27017/Ecom-CD")
    .then(()=>{console.log("DB conected")})
    .catch(()=>{console.log("DB not conected")})

let data = [
    {
        name:"Laptop",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 200,
        desc: "A laptop is a portable, battery-powered personal computer (PC) designed for mobile use, featuring a clamshell form factor with a screen"
    },
    {
        name:"drone",
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 100,
        desc: "A laptop is a portable, battery-powered personal computer (PC) designed for mobile use, featuring a clamshell form factor with a screen"
    },
    {
        name:"keyboard",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 40,
        desc: "A laptop is a portable, battery-powered personal computer (PC) designed for mobile use, featuring a clamshell form factor with a screen"
    },
    {
        name:"shirt",
        image: "https://plus.unsplash.com/premium_photo-1678218594563-9fe0d16c6838?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 60,
        desc: "A laptop is a portable, battery-powered personal computer (PC) designed for mobile use, featuring a clamshell form factor with a screen"
    },
    {
        name:"Phone",
        image: "https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 70,
        desc: "A laptop is a portable, battery-powered personal computer (PC) designed for mobile use, featuring a clamshell form factor with a screen"
    },
    {
        name:"watch",
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 500,
        desc: "A laptop is a portable, battery-powered personal computer (PC) designed for mobile use, featuring a clamshell form factor with a screen"
    },
]

Product.create(data)
    .then(()=>{
        console.log("product created successfully")
    })