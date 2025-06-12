const route = require("express").Router()

const register=require('../../controller/auth/register');
const login=require("../../controller/auth/login")
const getUserProfile=require("../../controller/auth/getUserProfile");
const editProfile=require("../../controller/auth/editProfile");
const checkAuth=require("../../middleware/authenticateJWT");
const contact = require("../../controller/auth/contact");

route.post("/register",register);
route.post("/login",login)
route.get("/profile",checkAuth,getUserProfile);
route.put("/updateprofile",checkAuth,editProfile);
route.post("/contact",contact)

module.exports=route;