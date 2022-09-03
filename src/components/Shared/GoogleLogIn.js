import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from './Loading';

const GoogleLogIn = () => {
    let gErrorElement;
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    if (gUser) {
        // console.log(gUser);
    }
    if (gLoading) {
        return <Loading />;
    }
    if (gError) {
        gErrorElement = <p className='font-bold text-center text-red-500'>You are not signed in by Google</p>;
    }

    return (
        <div>
            {gErrorElement}
            <button onClick={() => signInWithGoogle()} className="btn btn-wide btn-outline text-xl">Google</button>
        </div>
    );
};

export default GoogleLogIn;