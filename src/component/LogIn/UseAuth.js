import React, { useContext, useEffect } from 'react'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebaseConfig";
import { useState, createContext } from "react";
import { Route, Redirect } from 'react-router-dom';


// initialize firebase app
firebase.initializeApp(firebaseConfig)


// creat a Auth ConText api
const AuthContext = createContext()

export const AuthContextProvider = (props) => {
    const auth = Auth();
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

// creat a castom router




const getUser = user => {
    const { displayName, email, photoURL } = user;// distrcar a array and set value in variable
    return { name: displayName, email, img: photoURL }; // carat a new objet

}
export const PrivateRoute = ({ children, ...rest }) => {
    const auth = useAuth()
    console.log(auth);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/logIn",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}
const Auth = () => {
    const [user, setUser] = useState(null)

    // google sine in function
    const sineInWithGoogle = () => {
        // google sine in provider
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const sinnedInUser = getUser(res.user)
                setUser(sinnedInUser)// set value in state
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

    // sine out function here
    const sineOut = () => {
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
            setUser(null)
        }).catch(function (error) {
            // An error happened.
            console.log(error);
        });
    }
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                const currentUser = getUser(user)
                setUser(currentUser)
            }
            else {

            }
        })

    }, [])

    return {
        user,
        sineInWithGoogle,
        sineOut
    }

}

export default Auth