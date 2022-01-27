import React from 'react';
import HomeServices from '../HomeServices/HomeServices';
import GetInTouch from '../GetInTouch/GetInTouch';
import HeroSection from '../../HeroSection/HeroSection';
import About from '../About/About';
import ExpertTeam from '../ExpertTeam/ExpertTeam';


const Home = () => {
    return (
        <div id="home">

            <HeroSection></HeroSection>
            <HomeServices></HomeServices>

            <About></About>
            <ExpertTeam></ExpertTeam>
            <GetInTouch></GetInTouch>


        </div>
    );
};

export default Home;