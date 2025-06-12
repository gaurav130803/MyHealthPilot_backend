const mongoose = require('mongoose');

const SetSchema = new mongoose.Schema({
  weight: Number,
  reps: Number,
});

const ExerciseSchema = new mongoose.Schema({
  name: String,
  sets: [SetSchema],
});

const WorkoutSchema = new mongoose.Schema({
  username: { type: String, required: true },
  title: { type: String, required: true },
  exercises: [ExerciseSchema],
  date: { type: String, required: true },
});

module.exports = mongoose.model('Workout', WorkoutSchema);
