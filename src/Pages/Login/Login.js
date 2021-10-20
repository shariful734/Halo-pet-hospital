import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {

    const { signInUsingGoogle, handleLogin } = useAuth();



    return (
        <div className="container text-center my-5 w-25">

            <h1>Please Login</h1>

            <Form onSubmit={handleLogin} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <NavLink to="/SignUp"> <h5 className="p-3">New to Halo Animal Website? <br /> Sign Up Now </h5></NavLink>

            <button onClick={signInUsingGoogle} className="btn btn-warning m-3">Sign In With Google</button>

        </div>
    );
};

export default Login;