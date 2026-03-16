const express = require("express");
const app = express();
const mongoose = require("mongoose");

// mongodb://localhost:27017
// mongodb://127.0.0.1:27017

mongoose.connect("mongodb://localhost:27017/SEC-CC")
    .then(()=>{
        console.log("DB conected")
    })
    .catch(()=>{
        console.log("DB conected")
    })

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    age:Number,
    city:String
})

const Users = mongoose.model("Users",userSchema);

// CREATE READ UPDATE DELETE

//CREATE

// Users.create({
//     username:"rahul",
//     age:45,
//     city:"Delhi",
//     password:"rahul@123"
// }).then(()=>{console.log("Document craeted")})

//READ

// Users.find({username:"ajay"})
//     .then((data)=>{ console.log(data)});

// Users.findOne({username:"ajay"})
//     .then((data)=>{ console.log(data)});

// Users.findById('69b77c1517811ef254456989')
//     .then((data)=>{ console.log(data)});

// Users.findOne({_id:'69b77c1517811ef254456989'})
//     .then((data)=>{ console.log(data)});

// UPDATE

// Users.updateOne({username:"rahul"},{age:40,city:"Noida"})
//     .then(()=>{console.log("updated!")})

// Users.updateMany({username:"ajay"},{city:"Mumbai"})
//     .then(()=>{console.log("updated!")})

// Users.findByIdAndUpdate("69b77c1517811ef254456989",{city:"Delhi"})
//      .then(()=>{console.log("updated!")})

//DELETE

// Users.deleteOne({username:"ajay"})
//     .then(()=>{console.log("Deleted!")})

Users.deleteMany({})
    .then(()=>{console.log("Deleted!")})

// Users.findByIdAndDelete("69b77c1517811ef254456989")
//     .then(()=>{console.log("Deleted!")})


const PORT = 5000;
app.listen(PORT)