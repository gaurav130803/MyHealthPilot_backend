// models/Water.js
const mongoose = require('mongoose');

const WaterSchema = new mongoose.Schema({
  username: String,
  date: String,
  amount: { type: Number, default: 0 }, // in liters
});

module.exports = mongoose.model('Water', WaterSchema);
