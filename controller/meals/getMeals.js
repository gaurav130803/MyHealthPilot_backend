const Meal=require("../../models/Meal.model")

const getMeals = async(req,res,next)=>{
     const { username, date } = req.query;

  try {
    const existing = await Meal.findOne({ username, date });

    if (existing) {
      return res.status(200).json({ success: true, meals: existing.meals });
    } else {
      return res.status(200).json({ success: true, meals: {
        breakfast: [],
        lunch: [],
        dinner: [],
        snacks: [],
      }});
    }
  } catch (err) {
    console.error('DB error:', err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
}

module.exports=getMeals;