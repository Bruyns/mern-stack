const mongoose = require('mongoose')

const Schema = mongoose.Schema

// creates and enforces the schema type and structure in the database using object notation
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Workout', workoutSchema)

// Workout.find()  - method to use when you want to find specific data in Workout