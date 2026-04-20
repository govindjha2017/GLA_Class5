const express = require("express");
const router = express.Router();
const User = require("../model/User");

let isAuth = (req,res,next)=>{
    if(req.user){
        next()
    } else{
        return res.redirect("/login")
    }
}

router.post("/users/:productId/cart/add",isAuth,async(req,res)=>{
    const {productId} = req.params;

    const userId = req.user?._id;
    const user = await User.findById(userId);
    let index =-1;
    let cartItem = user.cart.find((item,ind)=>{
        if(item.productId==productId){
            index=ind;
            return item;
        }
    })

    if(cartItem){
        user.cart[index].quantity++;
    }else{
        user.cart.push({productId})
    }
    await user.save();

    res.redirect('/products')
})

router.get("/users/cart",isAuth,(req,res)=>{
    const userId = req.user?._id;
    const user = await User.findById(userId);

    res.render("")
})

module.exports = router;