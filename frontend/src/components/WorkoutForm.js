import { useState } from "react"
import { useWorkoutContext } from "../hooks/useWorkoutContext";


const WorkoutForm = () => {
    const { dispatch } = useWorkoutContext

    const [title, setTitle] = useState('')
    const [reps, setReps] = useState('')
    const [load, setLoad] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const workout = {title, load, reps}

        const response = await fetch('/api/workout', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            setEmptyFields([])
            console.log('New workout has been added', json)
            dispatch({ type: 'CREATE_WORKOUT', payload: json})
            
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new workout</h3>

            <label>Exercise Title: </label>
            <input 
                type="text" 
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyFields.includes('title') ? 'error' : ''}
            />

            <label>Load (in kg): </label>
            <input 
                type="number" 
                onChange={(e) => setLoad(e.target.value)}
                value={load}
                className={emptyFields.includes('load') ? 'error' : ''}
            />

            <label>Reps: </label>
            <input 
                type="number" 
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                className={emptyFields.includes('reps') ? 'error' : ''}
            />

            <button>Add workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm