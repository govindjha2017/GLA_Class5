const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    image:{type:String,required:true,trim:true},
    price:{type:Number,min:0,require:true},
    desc:{type:String,required:true,trim:true},
})

const Prouducts = mongoose.model("Prouducts",productSchema);

module.exports = Prouducts;
 