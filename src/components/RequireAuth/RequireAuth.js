import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);

    if (loading || sending) {
        return <Loading />;
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    }
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center mt-5 h-[50vh] w-1/2 mx-auto'>
            <h3 className='text-red-500 font-extrabold text-lg md:text-xl lg:text-3xl my-5'>Your Email is not verified!!</h3>
            <h5 className='text-green-600 font-extrabold text-lg md:text-xl lg:text-3xl my-5'> Please Verify your email address and refresh this site</h5>
            <button
                className='w-full bg-green-600 hover:bg-green-800 text-white text-xl hover:rounded-full cursor-pointer rounded-md p-2'
                onClick={async () => {
                    await sendEmailVerification();
                    toast.info('Send you a mail', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        });
                }}
            >
                Send Verification Email Again
            </button>
        </div>
    }

    return children;
};

export default RequireAuth;