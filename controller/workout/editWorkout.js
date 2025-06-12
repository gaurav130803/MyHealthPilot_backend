
const Workout=require("../../models/Workout.model")
const editWorkout= async (req,res,next)=>{
     try {
    const updated = await Workout.findOneAndUpdate(
      { _id: req.params.id, username: req.params.username },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ success: false, message: 'Workout not found' });
    res.json({ success: true, workout: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

module.exports=editWorkout;