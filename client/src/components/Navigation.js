import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav, Container, Modal, Tab } from 'react-bootstrap';
import Auth from '../utils/auth';
import Login from './Login'
import Signup from './Signup'


function Navbar() {

    const highlightLink = {
        color: " #eb945b",
    };
    // const [showModal, setShowModal] = useState(false);

    return (
        <div>

            <nav >
                <ul>
                    <li>
                        <NavLink to="/"
                            style={({ isActive }) =>
                                isActive ? highlightLink : undefined}>Home</NavLink>
                    </li>

                    {/* if user is logged in show profile, matches, and logout */}
                    {Auth.loggedIn() ? (
                        <>
                            <NavLink as={Link} to='/profile'
                                style={({ isActive }) =>
                                isActive ? highlightLink : undefined}>
                                Profile
                            </NavLink>
    
                            <NavLink to="/matches"
                                style={({ isActive }) =>
                                isActive ? highlightLink : undefined}>
                                Matches
                            </NavLink>
                            <NavLink onClick={Auth.logout}>Logout</NavLink>
                        </>
                    ) : (
                        // if not logged in, show login and signup page
                        <>
                            <li>
                                <NavLink to="/login"
                                style={({ isActive }) =>
                                isActive ? highlightLink : undefined}>Login</NavLink>
                            </li>
                            <li>
                                <NavLink to="/signup"
                                style={({ isActive }) =>
                                isActive ? highlightLink : undefined}>Signup</NavLink>
                            </li>
        
                            </>
                    )}

                    {/* would I need to throw contact and donate in there as well? i want them on both nav bars wether logged in or not*/}
            
                    <li>
                        <NavLink to="/contact"
                            style={({ isActive }) =>
                                isActive ? highlightLink : undefined}>Contact</NavLink>
                        {/* do we want this page if we have a footer with the contact? */}
                    </li>
                    <li>
                        <NavLink to="/donate"
                            style={({ isActive }) =>
                                isActive ? highlightLink : undefined}>Donate</NavLink>
                    </li>


                </ul>

            </nav>

        </div>
    )
}

export default Navbar;
