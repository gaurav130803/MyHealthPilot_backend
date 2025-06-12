const route = require("express").Router();

const updateWaterIntake=require("../../controller/water/updateWaterIntake");
const getWaterIntake=require("../../controller/water/getWaterIntake");
const checkAuth=require("../../middleware/authenticateJWT")


route.post("/log",checkAuth,updateWaterIntake);
route.get("/get",checkAuth,getWaterIntake);

module.exports=route;