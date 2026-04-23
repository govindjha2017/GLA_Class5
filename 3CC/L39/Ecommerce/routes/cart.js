const express = require("express");
const router = express.Router();
const User = require("../model/User");

let isAuth = (req,res,next)=>{
    if(req.user){
        next()
    }
    else{
        return res.redirect("/login")
    }
}


router.post("/users/:productId/cart/add",isAuth,async (req,res)=>{
    const {productId} = req.params;

    const userId = req.user?._id;
    const user = await User.findById(userId);
    let index=-1;

    let cartItems =  user.cart.find((item,ind)=>{
        if(item.productId==productId){
            index=ind;
            return true;
        }
    })

    if(cartItems){
        user.cart[index].quantity++;
    } else{
        user.cart.push({productId});
    }
    await user.save();

    res.redirect("/products");
})

router.get('/users/cart',isAuth,async (req,res)=>{
    const userId = req.user._id;
    let user = await User.findById(userId).populate('cart.productId');

    // res.json({data:user.cart})
    res.render("cart/index",{cartData:user.cart})
})

router.post('/users/:productId/cart/remove',async(req,res)=>{
    const {productId} = req.params;

    const userId = req.user?._id;
    const user = await User.findById(userId);
    let index=-1;

    let cartItems =  user.cart.find((item,ind)=>{
        if(item.productId==productId){
            index=ind;
            return item;
        }
    })

    if(user.cart[index].quantity>1){
        user.cart[index].quantity--;
    } else{
         user.cart.splice(index,1);
    }
    await user.save();

    res.redirect("/users/cart");   
})


module.exports = router;