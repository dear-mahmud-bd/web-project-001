import React from 'react';
import Banner from './Banner';
import HomeAppointment from './HomeAppointment';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Services/>
            <HomeAppointment/>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;