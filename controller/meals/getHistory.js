const Meal=require("../../models/Meal.model")

const getHistory= async(req,res,next)=>{
    const { username } = req.query;

  if (!username) return res.status(400).json({ success: false, message: 'Username is required' });

  try {
    const today = new Date();
    const tenDaysAgo = new Date(today);
    tenDaysAgo.setDate(today.getDate() - 9); // Include today

    const meals = await Meal.find({
      username,
      date: { $gte: tenDaysAgo.toISOString().split('T')[0] },
    }).sort({ date: 1 }); // oldest to newest

    const history = [];

    for (let i = 9; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      const dayMeal = meals.find((m) => m.date === dateStr);

      history.push({
        date: dateStr,
        meals: dayMeal ? dayMeal.meals : {},
      });
    }

    res.json({ success: true, history });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to fetch history' });
  }

}

module.exports=getHistory;