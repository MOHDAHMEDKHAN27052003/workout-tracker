import { NavLink } from "react-router-dom";

function HomeNav() {
    return (
        <>
            <div className="flex justify-evenly m-4 p-4 sm:mx-28 md:mx-40 lg:mx-100 rounded-2xl bg-gray-500">
                <NavLink to="/" className={e => e.isActive ? "text-blue-500" : 'text-white'}>Home</NavLink>
                <NavLink to="/workouts" className={e=>e.isActive?"text-blue-500":"text-white"}>Workouts</NavLink>
            </div>
        </>
    );
};

export default HomeNav;