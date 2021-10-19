import { useEffect, useState } from "react"

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import initializeAuthentiction from "../Firebase/Firebase.init";

initializeAuthentiction();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
    }


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, [])

    return {
        user,
        signInUsingGoogle
    }

}

export default useFirebase;