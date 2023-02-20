import React from 'react';
import {Link, NavLink} from 'react-router-dom';


function Navbar() {

    const highlightLink = {
        color: " #eb945b",
      };

    return (
        <div>
    
         <nav >
            <ul>
                <li>
                    <NavLink to = "/"
                    style={({ isActive }) =>
                    isActive ? highlightLink : undefined}>Home</NavLink>
                </li>
                <li>
                    <NavLink to = "/login"
                    style={({ isActive }) =>
                    isActive ? highlightLink : undefined}>Login</NavLink>
                </li>
                <li>
                    <NavLink to = "/logout"
                    style={({ isActive }) =>
                    isActive ? highlightLink : undefined}>Logout</NavLink>
                </li>

               {/* need to work out functionality for login/logout */}

                <li>
                    <NavLink to = "/profile"
                    style={({ isActive }) =>
                    isActive ? highlightLink : undefined}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to = "/matches"
                    style={({ isActive }) =>
                    isActive ? highlightLink : undefined}>Matches</NavLink>
                </li>
                <li>
                    <NavLink to = "/contact"
                    style={({ isActive }) =>
                    isActive ? highlightLink : undefined}>Contact</NavLink>
                    {/* do we want this page if we have a footer with the contact? */}
                </li>
                <li>
                    <NavLink to = "/donate"
                    style={({ isActive }) =>
                    isActive ? highlightLink : undefined}>Donate</NavLink>
                </li>


            </ul>
         </nav>

        </div>
    )
}

export default Navbar;