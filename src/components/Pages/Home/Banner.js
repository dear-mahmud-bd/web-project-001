import React from 'react';
import chair from '../../../assets/images/chair.png';    

const Banner = () => {
    return (
        <div className="hero min-h-[80vh] px-12 " >
            <div className="hero-content flex-col md:flex-row-reverse ">
                <img src={chair} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aliquam quis repellat modi perspiciatis debitis et, blanditiis aspernatur a eius, voluptatem quibusdam odio, labore quia sapiente harum officiis placeat eligendi.</p>
                    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;