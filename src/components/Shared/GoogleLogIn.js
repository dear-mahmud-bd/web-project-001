import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from './Loading';

const GoogleLogIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let gErrorElement;
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [token] = useToken(gUser);

    // solve the warning issue by using useEffect ...
    useEffect(() => {
        if (token) {
            return navigate(from, { replace: true });
        }
    }, [token, from, navigate])

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