const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    image:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        min:0,
        required:true,
    },
    desc:{
        type:String,
        required:true,
        trim:true
    }
});

const Product = mongoose.model("Product",productSchema);

module.exports = Product;