const mongoose = require("mongoose");
const Product = require("./model/products")

mongoose.connect("mongodb://localhost:27017/Ecom-hons")
    .then(()=>{console.log("DB conected")})
    .catch(()=>{console.log("DB not conected")})

const productsData = [
    {
        name:"Drone",
        image:"https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 150,
        desc: "a remotely piloted or autonomous flying aircraft, frequently used for aerial photography, surveillance, agriculture, and hobbyist fligh"
    },
    {
        name:"Laptop",
        image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 200,
        desc: "a remotely piloted or autonomous flying aircraft, frequently used for aerial photography, surveillance, agriculture, and hobbyist fligh"
    },
    {
        name:"Phone",
        image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 100,
        desc: "a remotely piloted or autonomous flying aircraft, frequently used for aerial photography, surveillance, agriculture, and hobbyist fligh"
    },
    {
        name:"Shirt",
        image:"https://plus.unsplash.com/premium_photo-1678218594563-9fe0d16c6838?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 70,
        desc: "a remotely piloted or autonomous flying aircraft, frequently used for aerial photography, surveillance, agriculture, and hobbyist fligh"
    },
     {
        name:"Shirt",
        image:"https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 40,
        desc: "a remotely piloted or autonomous flying aircraft, frequently used for aerial photography, surveillance, agriculture, and hobbyist fligh"
    },
]

Product.create(productsData)
    .then(()=>{console.log("Product added!")})