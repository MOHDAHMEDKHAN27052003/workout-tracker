import { useContext, useState } from "react";
import { WorkoutContext } from "../contexts/WorkoutContext";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function Workouts() {
    const { data } = useContext(WorkoutContext);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredWorkouts = data.filter(workout =>
        workout.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="m-8 sm:m-16">
                <h1 className="text-4xl">Workouts</h1>
                <div className="py-12">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:pb-8">
                        <input
                            type="text"
                            placeholder="Search workout..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="outline-0 border border-gray-500 px-4 py-2 rounded-lg w-full sm:w-1/2"
                        />
                        <div className="text-right">
                            <Link to="/workouts/create" className="bg-green-500 px-4 py-2 rounded-lg cursor-pointer text-white">
                                Add Workout
                            </Link>
                        </div>
                    </div>
                    <div className="py-4">
                        {filteredWorkouts.length > 0 ? (
                            <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                                {filteredWorkouts.map(workout => (
                                    <div key={workout.id} className="py-4 sm:py-0">
                                        <Card workout={workout} />
                                    </div>
                                ))}
                            </div>
                            ) : (
                            <div>
                                <h1>No workouts found. Try a different search term.</h1>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Workouts;