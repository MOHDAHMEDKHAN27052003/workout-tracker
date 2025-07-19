import { NavLink } from "react-router-dom";

function HomeNav() {
    return (
        <>
            <div className="flex justify-around py-4">
                <div className="flex gap-8 md:gap-16 bg-gray-800 text-center px-16 md:px-24 lg:px-28 py-2 md:py-4 rounded-lg">
                    <NavLink to="/" className={e => e.isActive ? "text-blue-500" : 'text-white'}>
                        Home
                    </NavLink>
                    <NavLink to="/workouts/create" className={e => e.isActive ? "text-blue-500" : 'text-white'}>
                        Add Workout
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default HomeNav;