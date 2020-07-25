import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebaseConfig";
import { useState } from "react";

// initialize firebase app
firebase.initializeApp(firebaseConfig)


const Auth = () => {
    const [user, setUser] = useState()



    // google sine in function
    const sineInWithGoogle = () => {
        // google sine in provider
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then(res => {
                console.log(res);
                const { displayName, email, photoURL } = res.user;// distrcar a array and set value in variable
                const sineInUser = { name: displayName, email, img: photoURL }; // carat a new objet
                setUser(sineInUser)// set value in state
                return res.user
            })
            .catch(error => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                setUser(null)
                return errorMessage
            });

    }

    return {
        user,
        sineInWithGoogle
    }

}

export default Auth