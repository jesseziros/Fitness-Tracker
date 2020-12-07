const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },

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
}, { toJSON: { virtuals: true } })

workoutSchema.virtual('totalDuration').get(function() {
  return this.exercises.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.duration
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;