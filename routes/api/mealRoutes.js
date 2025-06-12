const addMeals = require("../../controller/meals/addMeals");
const getHistory = require("../../controller/meals/getHistory");
const getMeals = require("../../controller/meals/getMeals");

const route = require("express").Router()
const checkAuth=require("../../middleware/authenticateJWT")
route.post("/addmeal",checkAuth,addMeals);
route.get("/getmeal",getMeals);
route.get("/gethistory",getHistory);

module.exports=route;