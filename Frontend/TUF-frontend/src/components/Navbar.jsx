import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <NavLink
                        to="/"
                        exact
                        className="text-white text-lg font-bold"
                        activeClassName="text-gray-200"
                    >
                        TakeUForward
                    </NavLink>
                </div>
                <div className="flex items-center">
                    <NavLink
                        to="/"
                        exact
                        className="mx-3 text-white hover:text-gray-200 transition duration-300 ease-in-out"
                        activeClassName="text-gray-200"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/submission"
                        className="mx-3 text-white hover:text-gray-200 transition duration-300 ease-in-out"
                        activeClassName="text-gray-200"
                    >
                        Submission
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
