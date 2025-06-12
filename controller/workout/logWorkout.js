const Workout=require("../../models/Workout.model")

const logWorkout = async (req,res,next)=>{
      const { username, title, exercises } = req.body;

  if (!username || !title || !exercises || !Array.isArray(exercises)) {
    return res.status(400).json({ success: false, message: 'Missing fields' });
  }

  try {
    const workout = new Workout({
      username,
      title,
      exercises,
      date: new Date().toISOString().split('T')[0],
    });

    await workout.save();

    res.status(201).json({ success: true, workout });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
}

module.exports=logWorkout;