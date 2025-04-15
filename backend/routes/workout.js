const express = require('express')
const {createWorkout, } = require('../controllers/workoutControllers.js')

// creates the router 
const router = express.Router()

// runs this function when the app uses the specific run directory api/workout/.....
// gets all the workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
})

// GET a single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single workout'})
})

// POST a new workout
router.post('/', createWorkout)

// DELETE a new workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
})

// UPDATE a new workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a new workout'})
})

module.exports = router