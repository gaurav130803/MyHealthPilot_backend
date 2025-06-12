const Workout=require("../../models/Workout.model");

const workoutHistory = async (req,res,next)=>{
   try {
    const workouts = await Workout.find({ username: req.params.username });
    res.json({ success: true, workouts });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error fetching history' });
  }
}

module.exports=workoutHistory;