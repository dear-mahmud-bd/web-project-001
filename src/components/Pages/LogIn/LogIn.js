import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleLogIn from '../../Shared/GoogleLogIn';

const LogIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        // console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    };

    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // solve the warning issue by using useEffect ...
    useEffect(() => {
        if (user) {
            return navigate(from, { replace: true });
        }
    }, [user, from, navigate])

    if (loading) {
        return <Loading className='h-[80vh]' />;
    }
    if (error) {
        if (error.message === 'Firebase: Error (auth/user-not-found).') {
            errorElement = <p className='font-bold text-center text-red-500'>User not found</p>;
        } else {
            errorElement = <p className='font-bold text-center text-red-500'>Password din't match</p>;
        }
    }

    return (
        <div className='h-[80vh] flex justify-center items-center'>
            <div className="card w-[75%] sm:w-[70%] md:w-[65%] lg:w-[50%] bg-base-200 shadow-xl">
                <div className="p-5 text-center">
                    <h2 className="text-3xl font-bold ">Welcome Back</h2>
                    <form onSubmit={handleSubmit(onSubmit)} >

                        <div className="form-control w-full max-w-xs mx-auto">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                        message: 'Add a valied Email'
                                    }
                                })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs mx-auto">
                            <label className="label">
                                <span className="label-text">Your Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 charecter or longer'
                                    }
                                })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {errorElement}
                        <input type="submit" value="LogIn" className="btn btn-wide btn-success" />
                    </form>
                    <p className='pt-4'>New to Doctors Portal? <Link to='/register' className='text-secondary'>Create Account</Link></p>
                    <div className="divider">or continue via</div>
                    <GoogleLogIn />
                </div>
            </div>
        </div>
    );
};

export default LogIn;