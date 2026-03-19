const express = require("express");
const app = express();

const mongoose = require("mongoose");
// mongodb://localhost:27017/
// mongodb://127.0.0.1:27017/
mongoose.connect("mongodb://localhost:27017/hons")
    .then(()=>{
        console.log("DB conected!")
    })
    .catch(()=>{
        console.log("DB not conected")
    })

const userSchema = new mongoose.Schema({
     name:String,
     age:Number,
     city:String
})

const Users = mongoose.model("Users",userSchema)

// Users.create({
//     name:"meena",
//     age:"41",
//     city:"Banglore"
// }).then(()=>{console.log("Document created")})

// READ

// Users.find({city:"Delhi"})
//     .then((data)=>{
//         console.log(data);
//     })

// Users.find({city:"Delhi",age:45})
//     .then((data)=>{
//         console.log(data);
//     })

// Users.find({age:31})
//     .then((data)=>{
//         console.log(data);
//     })

// Users.find({age:{$gte:31}})
//     .then((data)=>{
//         console.log(data);
//     })


// Users.findOne({})
//     .then((data)=>{
//         console.log(data);
//     })

// Users.findOne({_id:"69bb6edeef81b487d9f486ee"})
//     .then((data)=>{console.log(data)});

// Users.findById("69bb6edeef81b487d9f486ee")
//     .then((data)=>{console.log(data)});

// UPDATE

// Users.updateOne({name:"rahul"},{age:24,city:"Pune"})
//     .then(()=>{console.log("updated!")})

// Users.updateMany({city:"Pune"},{age:26})
//     .then(()=>{console.log("updated!")})

// Users.findByIdAndUpdate("69bb6f0a2c3422052ecc6607",{age:46})
//     .then(()=>{console.log("updated!")})


// Users.findByIdAndDelete("69bb6f0a2c3422052ecc6607")
//     .then(()=>{console.log("Deleted")})

// Users.deleteOne({city:"Pune"})
//     .then(()=>{console.log("Deleted")})

Users.deleteMany({})
    .then(()=>{console.log("Deleted")})

const PORT = 4000
app.listen(PORT);