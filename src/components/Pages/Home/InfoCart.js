import React from 'react';

const InfoCart = ({ img, cartTitle, bgClass }) => {
    return (
        <div className={`card lg:card-side bg-accent shadow-xl p-3 ${bgClass}`}>
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cartTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCart;