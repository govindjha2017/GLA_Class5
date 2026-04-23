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
    req.flash("success","Product added to cart");
    res.redirect(req.get("Referer"))
})



router.get("/users/cart",isAuth,async(req,res)=>{
    const userId = req.user?._id;
    const user = await User.findById(userId).populate('cart.productId');

    let totalPrice = user.cart.reduce((acc,item)=>{
        acc= acc+ item.productId.price*item.quantity;
        return acc;
    },0)
    

    res.render('cart/index',{data:user.cart,totalPrice})
})

router.post("/users/:productId/cart/remove",isAuth,async(req,res)=>{
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

    if(user.cart[index].quantity>1){
        user.cart[index].quantity--;
    }else{
        user.cart.splice(index,1)
    }
    await user.save();
    req.flash("success","Product removed from cart")
    res.redirect(req.get("Referer"))
})

module.exports = router;