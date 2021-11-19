import React from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Spinner } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'


const Login = () => {

    const { allContext } = useAuth();

    const { user, login, isLoading, authError, signInUsingGoogle } = allContext;

    const location = useLocation();
    const history = useHistory();

    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, history)
    }

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        login(data.email, data.password, location, history)
        console.log(data.email);
        reset();
    }



    return (
        <div className="container common text-center my-5 w-75">

            <h1>Please Login</h1>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input {...register("email",)} placeholder="your email" />
                <input type="password" {...register("password",)} placeholder="password" />

                <button className="btn-primary mt-3 px-5 py-1 " type="submit" >Login</button>

                {
                    isLoading && <Spinner animation="border" variant="danger" />
                }
            </form>

            <NavLink to="/SignUp"> <h5 className="p-3">New to Halo Animal Website? <br /> Sign Up Now </h5></NavLink>

            <button onClick={handleGoogleSignIn} className="btn  btn-warning">Sign In With Google</button>

            {
                user?.email && <Alert variant="info">
                    user login successfully
                </Alert>
            }
            {
                authError && <Alert variant="danger">
                    {authError}
                </Alert>
            }

        </div>
    );
};

export default Login;