import React from 'react';
import Auth from './Auth';

const LogIn = () => {
    // call Auth function 
    const auth = Auth()
    console.log(auth);

    return (
        <div>
            {
                auth.user ? <button onClick={auth.sineOut}>sine out</button> : <button onClick={auth.sineInWithGoogle} >sine in with google</button>
            }
        </div>
    );
};

export default LogIn;
