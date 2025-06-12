const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
  },
  height: {
    type: Number,
  },
  calorieGoal: {
    type: Number,
  },
  waterIntakeGoal: {
    type: Number,
  },
  armSize: {
    type: Number,
  },
  chestSize: {
    type: Number,
  },
  quadsSize: {
    type: Number,
  },
  forearmSize: {
    type: Number,
  },
  weightGoal: {
    type: Number,
  },
});

module.exports = model("User", UserSchema);
