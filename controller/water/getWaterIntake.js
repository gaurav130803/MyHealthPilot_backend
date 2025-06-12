const Water=require("../../models/Water.model")


const getWaterIntake= async(req,res,next)=>{
     const { username, date } = req.query;

  try {
    const entry = await Water.findOne({ username, date });
    res.status(200).json({ success: true, amount: entry?.amount || 0 });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
}

module.exports=getWaterIntake;