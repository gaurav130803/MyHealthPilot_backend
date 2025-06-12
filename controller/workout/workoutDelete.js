const Workout=require("../../models/Workout.model")

const workoutDelete= async (req,res,next)=>{
     try {
    await Workout.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Workout deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
}

module.exports=workoutDelete;