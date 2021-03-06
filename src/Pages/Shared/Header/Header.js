import './Header.css'

import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { allContext } = useAuth();
    const { user, logOut } = allContext;


    return (

        <>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand to="/Home">Halo Animal Hospital</Navbar.Brand>
                    <Nav>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <NavLink className="me-4 text-white link" to="/Home">Home</NavLink>
                            <NavLink className="me-4 text-white link" to="/ToPetOwner">Pet Owners</NavLink>
                            <NavLink className="me-4 text-white link" to="/AboutUs">About Us</NavLink>

                            <NavLink className="me-4 text-white link" to="/Login">Login</NavLink>
                            <span className="user-name me-4">  {user?.displayName}</span>
                            {user?.email && <button className="logout-button" onClick={logOut}>Log Out</button>}
                        </Navbar.Collapse>


                    </Nav>
                </Container>
            </Navbar>

        </>


    );
};

export default Header;