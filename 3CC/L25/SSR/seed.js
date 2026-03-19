const mongoose = require("mongoose");
const Product = require("./model/product");

mongoose.connect("mongodb://localhost:27017/SSR-CC")
    .then(()=>{console.log("DB conected!")})
    .catch(()=>{console.log("DB not conected!")})

const products = [
    {
        name:'Laptop',
        price:200,
        image:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc:'A laptop is a portable, battery-powered personal computer with an integrated screen, keyboard, and pointing device'
    },
    {
        name:'Phone',
        price:100,
        image: 'https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc:'A laptop is a portable, battery-powered personal computer with an integrated screen, keyboard, and pointing device'
    },
    {
        name:'shirt',
        price:50,
        image: 'https://plus.unsplash.com/premium_photo-1678218594563-9fe0d16c6838?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc:'A laptop is a portable, battery-powered personal computer with an integrated screen, keyboard, and pointing device'
    },
    {
        name:'shirt',
        price:40,
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc:'A laptop is a portable, battery-powered personal computer with an integrated screen, keyboard, and pointing device'
    },
]

Product.create(products)
    .then(()=>{console.log("Product added")})