require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workout')

// invokes or starts the express app or whichever variable its called
const app = express();

// global middleware to run before all other requests 
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})

// any GET requests sent to the browser or client, and returns the accompanying response "Routes", uses same routes as the GET from the workout.js
app.use('/api/workout', workoutRoutes)

// connect to the DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listens for requests from the app
        app.listen(process.env.PORT, () => {
            console.log(`Connected to DB & Listening on localhost:${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })



