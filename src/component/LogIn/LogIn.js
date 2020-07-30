import React from 'react';
import Auth from './UseAuth';

const LogIn = () => {
    // call Auth function 
    const auth = Auth()

    return (
        <div>
            {
                auth.user ? <button onClick={auth.sineOut}>sine out</button> : <button onClick={auth.sineInWithGoogle} >sine in with google</button>
            }
        </div>
    );
};

export default LogIn;
