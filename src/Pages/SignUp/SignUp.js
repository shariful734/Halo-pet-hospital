import React from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { Alert, Spinner } from 'react-bootstrap';
import './SignUp.css';


const SignUp = () => {

    const { allContext } = useAuth();

    const { registerUser, isLoading, user, authError, signInUsingGoogle } = allContext;

    const history = useHistory();
    const location = useLocation();

    const { register, handleSubmit, reset } = useForm();

    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, history)
    }

    const onSubmit = data => {
        console.log(data.email);
        if (data.password !== data.password2) {
            alert('your password did not matched');
            return
        }
        registerUser(data.email, data.password, data.name, history);
        reset();
    }

    return (
        <div className="container common w-75">



            <h3 className="text-center">Register</h3>

            {!isLoading &&

                <form onSubmit={handleSubmit(onSubmit)}>

                    <input {...register("name",)} placeholder="your name" />
                    <input {...register("email",)} placeholder="your email" />
                    <input type="password" {...register("password",)} placeholder="password" />
                    <input type="password"{...register("password2",)} placeholder="re-type password" />

                    <button className="btn-primary text-bold text-white mt-3 px-5 py-1 " type="submit" >Register</button>
                    <h4 className="my-3 ">or use</h4>
                    <button onClick={handleGoogleSignIn} className="btn btn-warning">Sign In With Google</button>
                    <NavLink className="my-4" to="/Login">Already registered log in?</NavLink>

                </form>

            }

            {
                user?.email && <Alert variant="info">
                    user created successfully
                </Alert>
            }
            {
                authError && <Alert variant="danger">
                    {authError}
                </Alert>
            }

            {
                isLoading && <Spinner animation="border" variant="danger" />
            }

        </div>
    );
};

export default SignUp;