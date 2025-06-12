// models/Meal.js
const {Schema,model} = require('mongoose');

const FoodItemSchema = new Schema({
  name: { type: String, required: true },
  calories: { type: Number, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String, default: 'g' },
});

const MealSchema = new Schema({
  username: { type: String, required: true },
  date: { type: String, required: true }, // store date as YYYY-MM-DD string
  meals: {
    breakfast: [FoodItemSchema],
    lunch: [FoodItemSchema],
    dinner: [FoodItemSchema],
    snacks: [FoodItemSchema],
  },
});

MealSchema.index({ username: 1, date: 1 }, { unique: true });

module.exports = model('Meal', MealSchema);
