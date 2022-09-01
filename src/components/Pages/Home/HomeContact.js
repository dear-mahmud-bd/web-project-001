import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const HomeContact = () => {
    return (
        <section className='mt-24 py-20'
            style={{
                background: `url(${appointment})`
            }}
        >
            <div className='text-center pb-10'>
                <h1 className='font-bold text-secondary'>Contact Us</h1>
                <h1 className='text-4xl text-white'>Stay connected with us</h1>
            </div>
            <form className="form-control w-[70%] md:w-[50%] mx-auto ">
                <input type="email" placeholder="Email Address" className="input input-bordered " /><br />
                <input type="text" placeholder="Subject" className="input input-bordered " /><br />
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Your message" /><br />
                <input type="submit" className="btn btn-primary w-[50%] mx-auto uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary" value="submit" disabled />
            </form>

        </section>









    );
};

export default HomeContact;