import { useEffect, useState } from "react";


// Components
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

const Home = () => {

    const {workout, dispatch} = useWorkoutContext()

    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workout')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_WORKOUT', payload: json})
            }
        }

        fetchWorkouts()
    }, [])

    return (
        <div children="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}



export default Home;