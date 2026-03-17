const express = require("express");
const app = express();

const mongoose = require("mongoose");

// mongodb://localhost:27017
// mongodb://127.0.0.1:27017

mongoose.connect('mongodb://localhost:27017/sec-CB')
    .then(()=>{
        console.log("Db conected")
    })
    .catch(()=>{
        console.log("Db not conected")
    })

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    age:Number,
    city:String
})

const Users = mongoose.model("Users",userSchema)

// Create read update delete

// Users.create({
//     username:"rahul",
//     password:"rahul@123",
//     age:23,
//     city:"Delhi"
// }).then(()=>{console.log("document created")})

// READ

// Users.find({})
//     .then((data)=>{
//         console.log(data);
//     })

// Users.findOne({})
//     .then((data)=>{
//         console.log(data);
//     })

// Users.find({city:"Delhi"})
//     .then((data)=>{
//         console.log(data);
//     })

// Users.findById("69b917a3af199a6f5b52850c")
//     .then((data)=>{console.log(data)});


//Update

// Users.updateOne({city:"Delhi"},{age:27})
//     .then(()=>{console.log("updated!")})

// Users.updateOne({},{age:34})
//     .then(()=>{console.log("updated!")})

// Users.findByIdAndUpdate("69b917a3af199a6f5b52850c",{password:'abcd@123'})
//      .then(()=>{console.log("updated!")})

// Users.updateMany({},{age:25})
//     .then(()=>{console.log("updated!")})

//Delete

// Users.findByIdAndDelete("69b917a3af199a6f5b52850c")
//     .then(()=>{console.log("Deleted")})

// Users.deleteOne({})
//     .then(()=>{console.log("Deleted!")})

Users.deleteMany({})
    .then(()=>{console.log("Deleted!")})

app.listen(5000)
// const PORT = 5000;
// app.listen(PORT,()=>{
//     console.log("Server run at port ",PORT);
// })