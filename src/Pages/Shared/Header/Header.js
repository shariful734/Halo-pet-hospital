import './Header.css'

import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Header = () => {


    return (

        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="/Home">Halo Animal Hospital</Navbar.Brand>
                    <Nav className="">
                        <NavLink className="me-2 text-white link" to="/Home">Home</NavLink>
                        <NavLink className="me-2 text-white link" to="/Login">Login</NavLink>
                        <button>Log Out</button>

                    </Nav>
                </Container>
            </Navbar>

        </>


    );
};

export default Header;