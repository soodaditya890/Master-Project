// const express = require ("express");
//env variable
require("dotenv").config();


import express from "express";
import cors from "cors";
import helmet from "helmet";   //for more security and flexibility



//config 
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";

//API
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Menu from "./API/Menu";
import Image from "./API/Image";
import Order from "./API/Orders";
import Reviews from "./API/reviews";
import User from "./API/User";

//Database connection
import ConnectDB from "./database/connection";
import passport from "passport";

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

googleAuthConfig(passport);
routeConfig(passport);

//for application routes
//localhost:4000/auth/signup
zomato.use("/auth",Auth);
zomato.use("/restaurant",Restaurant);
zomato.use("/food",Food);
zomato.use("/menu",Menu);
zomato.use("/image",Image);
zomato.use("/order",Order);
zomato.use("/reviews",Reviews);
zomato.use("/user",User);


zomato.get("/",(req,res)=>res.json({message:"setup done!!!"}));

zomato.listen(4000,()=>
ConnectDB().then(()=>console.log("server is up and running"))
.catch(()=>console.log("DB connection failed")));