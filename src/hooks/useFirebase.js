import { useEffect, useState } from "react"

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentiction from "../Firebase/Firebase.init";

initializeAuthentiction();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');




    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();



    const signInUsingGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const user = result.user;
                setAuthError('')
                const destination = location?.state?.from || '/';
                history.replace(destination);

            }).catch((error) => {
                setAuthError(error.message)
            }).finally(() => setIsLoading(false));

    };

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        if (password.length < 6) {
            alert('password should be 6 character lomg')
            return
        }
        createUserWithEmailAndPassword(auth, email, password)

            .then(result => {
                setUser(result.user);
                setAuthError('');
                const newUser = { email, displayName: name }
                setUser(newUser)

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });


                history.replace('/');
            })
            .catch((error) => {

                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const login = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {

                const destination = location?.state?.from || '/'
                history.replace(destination)
                // Signed in 
                setUser(result.user);
                setAuthError('');
            })
            .catch((error) => {

                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));

    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)
                // ...
            } else {
                setUser({})
            }

            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [auth]);


    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({});

            })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        authError,
        signInUsingGoogle,
        registerUser,
        login,
        logOut,
    }

}

export default useFirebase;