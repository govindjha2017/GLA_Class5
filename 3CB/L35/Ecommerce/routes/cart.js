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
    console.log("hello")
    let totalPrice = user.cart.reduce((acc,item)=>{
        console.log("workd")
        console.log(item.productId.price);
        let x = item.productId.price*item.qunatity;
        acc+=x;
        return acc;
    },0)
    res.render("cart/index",{cartData:user.cart,totalPrice})
})

router.post('/users/:productId/cart/additem',isAuth,async (req,res)=>{
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

    res.redirect("/users/cart")

})


router.post("/users/:productId/cart/remove",async (req,res)=>{
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
    if(user.cart[index].qunatity>1){
        user.cart[index].qunatity--;
    }else{
        user.cart.splice(index,1);
    }

    await user.save();

    res.redirect("/users/cart")

})


module.exports = router;