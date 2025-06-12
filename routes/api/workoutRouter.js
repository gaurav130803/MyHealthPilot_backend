const route = require("express").Router();

const editWorkout = require("../../controller/workout/editWorkout");
const logWorkout = require("../../controller/workout/logWorkout");
const workoutDelete = require("../../controller/workout/workoutDelete");
const workoutHistory = require("../../controller/workout/workoutHistory");
const checkAuth=require("../../middleware/authenticateJWT")

route.post("/log",checkAuth,logWorkout);
route.get("/history/:username",checkAuth,workoutHistory);
route.delete("/:id",checkAuth,workoutDelete);
route.put("/:username/:id",checkAuth,editWorkout);

module.exports=route;