const express = require("express");
const router = express.Router();
const User = require("../models/User");

let isAuth = (req,res,next)=>{
    if(req.user){
        next()
    }else{
        return res.redirect("/login")
    }
}

router.post('/users/:productId/cart/add',isAuth,async (req,res)=>{
    const {productId} = req.params;
    const userId = req.user?._id;
    const user = await User.findById(userId);
    let index = -1;

    let cartItem = user.cart.find((item,ind)=>{
        if(item.productId==productId){
            index=ind;
            return item
        }
    })
    if(cartItem){
        user.cart[index].qunatity++;
    }else{
        user.cart.push({productId})
    }

    await user.save();

    res.redirect("/products")

})

router.get('/users/cart',isAuth,async (req,res)=>{

    const userId = req.user._id;
    const user = await User.findById(userId).populate("cart.productId");

    res.render("cart/index",{data:user.cart})
})


module.exports = router;