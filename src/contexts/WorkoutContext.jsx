import { createContext, useState } from "react";

export const WorkoutContext = createContext(null);

export function WorkoutProvider(props) {
    const [data, setData] = useState(
        JSON.parse(window.localStorage.getItem("workouts")) || []
    );
    const [favorite, setFavorite] = useState(
        JSON.parse(window.localStorage.getItem("favroite")) || []
    );

    return (
        <>
            <WorkoutContext.Provider value={{data, setData, favorite, setFavorite}}>
                {props.children}
            </WorkoutContext.Provider>
        </>
    );
};