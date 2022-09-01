import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import ReviewCart from './ReviewCart';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            from: "California",
            message: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1,
        },
        {
            _id: 2,
            name: "John Willium",
            from: "New York",
            message: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2,
        },
        {
            _id: 3,
            name: "Mitchel Starc",
            from: "Silicon Valley",
            message: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3,
        }
    ];
    return (
        <section className='px-12 mb-20'>
            <div className='flex items-start justify-between mb-16'>
                <div>
                    <h1 className='font-bold text-xl text-secondary'>Testimonial</h1>
                    <h1 className='text-4xl'>What Our Patients Says</h1>
                </div>
                <img className=' w-24 md:w-40' src={quote} alt="quote" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-12 my-10'>
                {reviews.map(review => <ReviewCart key={review._id} review={review}></ReviewCart>)}
            </div>
        </section>
    );
};

export default Testimonial;