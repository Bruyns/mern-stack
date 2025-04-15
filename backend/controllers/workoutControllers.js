const Workout = require('../models/workoutModel.js')

// Get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

// Get a  single workout


// Create new workout
const createWorkout = async (req, res) => {
    const {title, reps, load} = req.body

    // add documentation for created workout to the database (DB)
    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Delete a workout


// Update a workout


module.exports = {
    createWorkout,
    
}