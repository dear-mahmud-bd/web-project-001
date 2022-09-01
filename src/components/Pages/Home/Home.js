import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from './Banner';
import HomeAppointment from './HomeAppointment';
import HomeContact from './HomeContact';
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
            <Testimonial/>
            <HomeContact/>
            <Footer/>
        </div>
    );
};

export default Home;