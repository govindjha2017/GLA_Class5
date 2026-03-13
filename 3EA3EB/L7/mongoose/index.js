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

Users.find({age:35})
    .then((data)=>{
        console.log(data);
    })

app.listen(3000);