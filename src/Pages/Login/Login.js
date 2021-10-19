import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {

    const { signInUsingGoogle } = useFirebase();

    return (
        <div className="container mx-auto">

            <h1>Please Login</h1>

            <button onClick={signInUsingGoogle} className="btn btn-warning">Sign In With Google</button>

        </div>
    );
};

export default Login;