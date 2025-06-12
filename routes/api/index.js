const router = require("express").Router()
const authRouter=require('./authRouter.js')
const mealRouter=require('./mealRoutes.js')
const waterRouter=require("./waterRoutes.js")
const workoutRouter=require("./workoutRouter.js")


router.use('/auth',authRouter);
router.use("/meals",mealRouter);
router.use("/water",waterRouter)
router.use("/workout",workoutRouter);


module.exports = router;