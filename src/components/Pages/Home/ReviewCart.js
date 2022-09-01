import React from 'react';

const ReviewCart = ({ review }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p className='mb-2'>{review.message}</p>
                <div className="card-actions justify-start">
                    <div className="flex items-center justify-center">
                        <div className="w-16 md:w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.img} alt='' />
                        </div>
                        <div className='pl-2'>
                            <h2 className="card-title">{review.name}</h2>
                            <h2 className="">{review.from}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCart;