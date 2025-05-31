import { useContext } from "react";
import { WorkoutContext } from "../contexts/WorkoutContext";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function Workouts() {
    const { data } = useContext(WorkoutContext);

    return (
        <>
            <div className="m-8 sm:m-16">
                <h1 className="text-4xl">Workouts</h1>
                <div className="py-12">
                    <div className="text-right sm:pb-8">
                        <Link to="/workouts/create" className="bg-green-500 px-4 py-2 rounded-lg cursor-pointer text-white">
                            Add Workout
                        </Link>
                    </div>
                    <div className="py-4">
                        {data.length > 0 ? (
                            <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                                {data.map(workout => (
                                    <div className="py-4 sm:py-0">
                                        <Card key={workout.id} workout={workout} />
                                    </div>
                                ))}
                            </div>
                            ): (
                            <div>
                                <h1>No workouts yet, Starts by creating the first one  :-</h1>        
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Workouts;