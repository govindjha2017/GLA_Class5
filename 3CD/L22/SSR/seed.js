const mongoose = require("mongoose");
const Users = require("./model/users")
mongoose.connect("mongodb://localhost:27017/SSR-CD")
    .then(()=>{console.log("DB conected!")})
    .catch(()=>{console.log("DB not conected!")})

const users = [
    {
        name:'rahul',
        age:35,
        city:'Delhi',
        password:'rahul123'
    },
    {
        name:'ajay',
        age:45,
        city:'Mumbai',
        password:'ajay123'
    },
    {
        name:'meena',
        age:27,
        city:'Noida',
        password:'meena123'
    },
    {
        name:'nitin',
        age:31,
        city:'Kolkata',
        password:'nitin123'
    },

]

Users.create(users)
    .then(()=>{console.log("DB seeded!")})