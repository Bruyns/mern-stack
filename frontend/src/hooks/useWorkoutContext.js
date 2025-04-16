import { WorkoutContext } from "../content/WorkoutContent";
import { useContext } from "react";

export const useWorkoutContext = () => {
    const context = useContext(WorkoutContext)

    if (!context) {
        throw Error("useWorkoutContext must be used inside an WorkoutContentProvider")
    }

    return context
}