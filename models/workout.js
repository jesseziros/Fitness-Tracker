const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Workout type is required."
      },
      name: {
        type: String,
        trim: true,
        required: "Workout name is required."
      },
      duration: {
        type: Number,
        required: "Workout duration is required."
      },
      distance: {
        type: Number
      },
      weight: {
        type: Number
      },
      sets: {
        type: Number
      },
      reps: {
        type: Number
      }
    }
  ]
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;