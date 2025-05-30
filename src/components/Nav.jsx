import { NavLink } from "react-router-dom";

function Nav() {
    
    return (
        <>
            <nav className="m-4 sm:mx-20 lg:mx-60 sm:my-8 p-4 flex justify-evenly bg-gray-500 text-white rounded-2xl">
                <NavLink to='/' className={e=>e.isActive?"text-blue-500":''} >
                    Home
                </NavLink>
                <NavLink to='/workouts' className={e=>e.isActive?"text-blue-500":''}>
                    Workouts
                </NavLink>
                <NavLink to='/about' className={e=>e.isActive?"text-blue-500":''}>
                    About
                </NavLink>
                <NavLink to='/favorites' className={e=>e.isActive?"text-blue-500":''}>
                    Favorites
                </NavLink>
            </nav>
        </>
    );
};

export default Nav;