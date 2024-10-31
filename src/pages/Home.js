import React, { useEffect } from 'react';
import HomeIntro from '../components/home/HomeIntro';
import StatsSection from '../components/home/StatsSection';
import AboutUs from '../components/home/AboutUs';
import Founders from '../components/home/Founders';
import ClientLogosGrid from '../components/home/ClientLogosGrid';

const Home = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Cleanup on unmount
        };
    }, []);

    return (
        <>
            <HomeIntro />
            <StatsSection />
            <AboutUs />
            <Founders />
            <ClientLogosGrid />
            <div className="elfsight-app-32aeb17a-e169-4893-bf48-af602738891f" data-elfsight-app-lazy></div>
        </>
    );
};

export default Home;
