import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";

const LogIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };



    let errorElement;
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (user) {
        console.log(user);
    }
    if (loading) {
        // return <button className="btn btn-square loading "></button>;
    }
    if (error) {
        errorElement = <p className='font-bold text-center text-red-500'>You are not signed in by Google</p>
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
                                        message: 'error message'
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
                        <input type="submit" value="LogIn" className="btn btn-wide btn-success" />
                    </form>

                    <div className="divider">or continue via</div>
                    {errorElement}
                    <button onClick={() => signInWithGoogle()} className="btn btn-wide btn-outline text-xl">Google</button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;