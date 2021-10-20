import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const SignUp = () => {

    const { handleSignUp, handleEmail, handlePassword, error } = useAuth();

    return (
        <div className="container w-50">


            <form onSubmit={handleSignUp}>
                <h3 className="text-center">Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input onBlur={handleEmail} type="email" className="form-control" placeholder="Enter email" required />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input onBlur={handlePassword} type="password" className="form-control" placeholder="Enter password" required />
                </div>

                <h5 className="text-danger"> {error} </h5>

                <button type="submit" className="btn btn-primary btn-lg btn-block my-3">Register</button>

                <NavLink to="/Login">Already registered log in?</NavLink>

            </form>





        </div>
    );
};

export default SignUp;