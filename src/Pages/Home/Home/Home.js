import React from 'react';
import Banner from '../Banner/Banner';
import Founder from '../Founder/Founder';
import Services from '../Services/Services';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Founder></Founder>
            <WhyUs></WhyUs>

        </div>
    );
};

export default Home;