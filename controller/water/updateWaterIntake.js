const Water=require("../../models/Water.model")

const updateWaterIntake = async (req, res, next) => {
  const { username, date, amount } = req.body;
  //console.log("Incoming request:", req.body);

  try {
    let entry = await Water.findOne({ username, date });
    //console.log("Existing entry:", entry);

    if (entry) {
      entry.amount += amount;
      await entry.save();
    } else {
      entry = new Water({ username, date, amount });
      await entry.save();
    }

    res.status(200).json({ success: true, entry });
  } catch (err) {
    console.error("Update water intake error:", err);
    res.status(500).json({ success: false, error: 'Server Error' });
  }
};

module.exports=updateWaterIntake;