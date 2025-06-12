const Meal=require("../../models/Meal.model")

const addMeals = async(req,res,next)=>{
    const { username, date, meals } = req.body;

  if (!username || !date || !meals) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  try {
    // Find if meal already exists for this user+date
    let mealDoc = await Meal.findOne({ username, date });

    if (mealDoc) {
      // Update existing meal data
      mealDoc.meals = meals;
    } else {
      // Create new document
      mealDoc = new Meal({ username, date, meals });
    }

    await mealDoc.save();

    return res.json({ success: true, message: 'Meals saved successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
}

module.exports=addMeals;