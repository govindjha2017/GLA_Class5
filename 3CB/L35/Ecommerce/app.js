const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/products")
const methodOverride = require('method-override');
const ejsMate = require("ejs-mate");
const User = require("./models/User")
const passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session");
const path = require("path");
const flash = require("connect-flash");

app.use(express.static(path.join(__dirname,"public")))

app.engine("ejs",ejsMate);

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))

mongoose.connect("mongodb://localhost:27017/Ecom-CB")
    .then(()=>{
        console.log("DB conected")
    })
    .catch(()=>{
        console.log("DB not conected");
    })

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(flash())

///ROUTES

app.use((req,res,next)=>{
    res.locals.currUser = req.user;

    next()
})

app.get('/',(req,res)=>{
    res.render("home")
})

const productRoutes = require("./routes/product");
app.use(productRoutes);
const authRoutes = require('./routes/auth');
app.use(authRoutes);
const cartRoutes = require("./routes/cart");
app.use(cartRoutes);



const PORT = 5000;
app.listen(PORT,()=>{
    console.log("server run at port ",PORT);
})