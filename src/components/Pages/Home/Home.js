import React from 'react';
import Banner from './Banner';
import HomeAppointment from './HomeAppointment';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Services/>
            <HomeAppointment/>
        </div>
    );
};

export default Home;