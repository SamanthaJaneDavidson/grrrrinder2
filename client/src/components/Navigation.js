// import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import Auth from '../utils/auth';

function Navbar() {
    const highlightLink = {
        color: "#f5f5f5",
        // "#e9801d",
    };
    
    // const [showModal, setShowModal] = useState(false);
    return (
        <div id="navbar">
            <Nav id="navcontent" >
                <NavLink className="navtext" to="/"
                    style={({ isActive }) =>
                        isActive ? highlightLink : undefined}>Home</NavLink>
                {/* if user is logged in show profile, matches, and logout */}
                {Auth.loggedIn() ? (
                    <>
                        <NavLink className="navtext" as={Link} to='/profile'
                            style={({ isActive }) =>
                                isActive ? highlightLink : undefined}>
                            Profile
                        </NavLink>
                        <NavLink className="navtext" to="/search-dogs"
                            style={({ isActive }) =>
                                isActive ? highlightLink : undefined}>
                            Search Dogs
                        </NavLink>
                        <NavLink className="navtext" onClick={Auth.logout}>Logout</NavLink>
                    </>
                ) : (
                    // if not logged in, show login and signup page
                    <>
                            <NavLink className="navtext" to="/login"
                                style={({ isActive }) =>
                                    isActive ? highlightLink : undefined}>Login</NavLink>
                        
                            <NavLink className="navtext" to="/signup"
                                style={({ isActive }) =>
                                    isActive ? highlightLink : undefined}>Signup</NavLink>
                        </>
                )}
                {/* would I need to throw contact and donate in there as well? i want them on both nav bars wether logged in or not*/}
                <NavLink className="navtext" to="/donate"
                    style={({ isActive }) =>
                        isActive ? highlightLink : undefined}>Donate</NavLink>
            </Nav>
        </div>
    )
}
export default Navbar;