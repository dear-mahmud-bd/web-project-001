import React from 'react';
import InfoCart from './InfoCart';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-12 font-bold my-10'>
            <InfoCart cartTitle='Opening Hours' bgclassName='bg-gradient-to-r from-secondary to-primary' img={clock} />
            <InfoCart cartTitle='Our Location' bgclassName='bg-accent' img={marker} />
            <InfoCart cartTitle='Contuct Us' bgclassName='bg-gradient-to-r from-secondary to-primary' img={phone} />
        </div>
    );
};

export default Info;