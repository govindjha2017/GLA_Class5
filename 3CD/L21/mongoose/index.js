const express = require('express');
const app = express();

const mongoose = require('mongoose');

// mongodb://127.0.0.1:27017/sec-CD

mongoose.connect('mongodb://localhost:27017/sec-CD')
    .then(()=>{console.log("DB conected")})
    .catch(()=>{console.log("DB not conected")})

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    age: Number,
    city:String
})

const Users = mongoose.model("Users",userSchema);

// create read update delete
//create
// Users.create({
//     name:'ajay',
//     password:'ajay@123',
//     age:45,
//     city:'Delhi'
// }).then(()=>{console.log("document created")})

//Read

// Users.find({age:35})
//     .then((data)=>{
//         console.log(data);
//     })

// Users.find({})
//     .then((data)=>{
//         console.log(data);
//     })

// Users.find({age:{$gt:36}})
//     .then((data)=>{
//         console.log(data);
//     })

// Users.findById("69b38299d35d986a1e36045e")
//     .then((data)=>{
//         console.log(data);
//     })

// Users.findOne({age:45})
//     .then((data)=>{
//         console.log(data)
//     })

// UPDATE

// Users.updateOne({age:45},{city:"pune"})
//     .then(()=>{console.log("updated")})

// Users.updateOne({},{city:"kolkata"})
//     .then(()=>{console.log("updated")})

// Users.updateMany({},{city:"kolkata"})
//      .then(()=>{console.log("updated")})

// Users.findByIdAndUpdate("69b38299d35d986a1e36045e",{age:25,city:"Delhi"})
//      .then(()=>{console.log("updated")})

// Users.findByIdAndDelete("69b38299d35d986a1e36045e")
//     .then(()=>{console.log("Deleted!")})

// Users.deleteOne({})
//     .then(()=>{console.log("Deleted!")})

Users.deleteMany({})
    .then(()=>{console.log("Deleted!")})


app.listen(3000);