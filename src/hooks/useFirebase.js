import { useEffect, useState } from "react"

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentiction from "../Firebase/Firebase.init";

initializeAuthentiction();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })

    }

    const handleEmail = e => {
        setEmail(e.target.value);

    }
    const handlePassword = e => {
        setPassword(e.target.value);

    }

    const handleSignUp = e => {
        e.preventDefault();
        if (password.length < 8) {
            setError('Password Must Be 8 Charactar long')
            return
        }

        if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
            setError('Please Give Valid Email Address');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
            })

    }

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setError('');
            })
    }


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }

        })
        return () => unsubscribed;
    }, [])

    return {
        user,
        signInUsingGoogle,
        logout,
        handleSignUp,
        handleEmail,
        handlePassword,
        error,
        handleLogin,
    }

}

export default useFirebase;