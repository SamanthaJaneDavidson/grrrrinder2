//will need this instead if using useState
//import React, { useState } from 'react';

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav, Container, Modal, Tab } from 'react-bootstrap';
import Auth from '../utils/auth';
import Login from './Login'
import Signup from './Signup'


function Navbar() {

    const highlightLink = {
        color: " #eb945b",
    };
    const [showModal, setShowModal] = useState(false);

    return (
        <div>

            <nav >
                <ul>
                    <li>
                        <NavLink to="/"
                            style={({ isActive }) =>
                                isActive ? highlightLink : undefined}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login"
                            style={({ isActive }) =>
                                isActive ? highlightLink : undefined}>Login</NavLink>
                    </li>

                    {/* if user is logged in show profile and logout */}
                    {Auth.loggedIn() ? (
                        <>
                            <NavLink as={Link} to='/profile'>
                                Profile
                            </NavLink>
                            <NavLink onClick={Auth.logout}>Logout</NavLink>
                        </>
                    ) : (
                        <NavLink onClick={() => setShowModal(true)}>Login/Sign Up</NavLink>
                    )}

                    {/* need to work out functionality for login/logout */}

                    <li>
                        <NavLink to="/profile"
                            style={({ isActive }) =>
                                isActive ? highlightLink : undefined}>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/matches"
                            style={({ isActive }) =>
                                isActive ? highlightLink : undefined}>Matches</NavLink>
                    </li>
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

                <Modal
                    size='lg'
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    aria-labelledby='signup-modal'>
                    {/* tab container to do either signup or login component */}
                    <Tab.Container defaultActiveKey='login'>
                        <Modal.Header closeButton>
                            <Modal.Title id='signup-modal'>
                                <Nav variant='pills'>
                                    <Nav.Item>
                                        <Nav.Link eventKey='login'>Login</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Tab.Content>
                                <Tab.Pane eventKey='login'>
                                    <Login handleModalClose={() => setShowModal(false)} />
                                </Tab.Pane>
                                <Tab.Pane eventKey='signup'>
                                    <Signup handleModalClose={() => setShowModal(false)} />
                                </Tab.Pane>
                            </Tab.Content>
                        </Modal.Body>
                    </Tab.Container>
                </Modal>
            </nav>

        </div>
    )
}

export default Navbar;
