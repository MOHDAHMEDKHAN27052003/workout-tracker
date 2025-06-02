import { createContext, useState } from "react";

export const WorkoutContext = createContext(null);

export function WorkoutProvider(props) {
    const [data, setData] = useState(
        JSON.parse(localStorage.getItem("workouts")) || []
    );
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem("favorites")) || []
    );

    return (
        <>
            <WorkoutContext.Provider value={{data, setData, favorites, setFavorites}}>
                {props.children}
            </WorkoutContext.Provider>
        </>
    );
};