import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentiction = () => {

    initializeApp(firebaseConfig);
}

export default initializeAuthentiction;