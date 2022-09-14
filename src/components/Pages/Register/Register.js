import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import GoogleLogIn from '../../Shared/GoogleLogIn';
import Loading from '../../Shared/Loading';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let errorElement;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, uError] = useUpdateProfile(auth);
    const [token] = useToken(user);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        // console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name })
    };

    // solve the warning issue by using useEffect ...
    useEffect(() => {
        if (token) {
            return navigate(from, { replace: true });
        }
    }, [token, from, navigate])


    if (loading || updating) {
        return <Loading />;
    }
    if (error || uError) {
        errorElement = <p className='font-bold text-center text-red-500'>{error?.message || uError?.message}</p>;
    }

    return (
        <div className='h-[80vh] flex justify-center items-center'>
            <div className="card w-[75%] sm:w-[70%] md:w-[65%] lg:w-[50%] bg-base-200 shadow-xl">
                <div className="p-5 text-center">
                    <h2 className="text-3xl font-bold ">Register Now</h2>
                    <form onSubmit={handleSubmit(onSubmit)} >

                        <div className="form-control w-full max-w-xs mx-auto">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    },
                                    minLength: {
                                        value: 3,
                                        message: 'Must be 3 charecter or longer'
                                    }
                                })} />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                {errors.name?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
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
                        <input type="submit" value="Register" className="btn btn-wide btn-success" />
                    </form>
                    <p className='pt-4'>Already have an account ? <Link to='/login' className='text-secondary'>LigIn Account</Link> </p>
                    <div className="divider">or continue via</div>
                    <GoogleLogIn />
                </div>
            </div>
        </div>
    );
};

export default Register;