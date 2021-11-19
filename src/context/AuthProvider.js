import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
import useServices from '../hooks/useServices';

export const AuthContext = createContext();


const AuthProvider = (props) => {
    const allContext = useFirebase();
    const { services } = useServices();
    const data = {
        allContext,
        services
    };
    return (
        <AuthContext.Provider value={data}>

            {props.children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;