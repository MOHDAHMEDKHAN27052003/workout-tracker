import { NavLink } from "react-router-dom";

function HomeNav() {
    return (
        <>
            <div className="flex justify-evenly m-4 p-4 sm:mx-28 md:mx-60 lg:mx-120 rounded-2xl bg-gray-500">
                <NavLink to="/" className={e => e.isActive ? "text-blue-500" : 'text-white'}>
                    Home
                </NavLink>
            </div>
        </>
    );
};

export default HomeNav;