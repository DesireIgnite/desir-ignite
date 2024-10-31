import React from 'react';
import '../../styles/home/AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us">
            <img 
                src={`${process.env.PUBLIC_URL}/assets/about-us.png`} // Updated path to use the public assets folder
                alt="About Us" 
                className="about-us-image"
            />
            <div className="about-us-box">
                <h1 className="about-us-title">ABOUT US</h1>
                <p className="about-us-description">
                    Introducing our specialized Digital Creative Agency, focusing on creativity. 
                    With 5+ years of experience and collaborations with renowned brands like 
                    Frontrow, Cosiq, Inditech, Waybeyond, and Humnd, we bring expertise across 
                    different industries. Elevating brands' online presence with captivating designs.
                </p>
                <p className="about-us-description">
                    Our team works collaboratively to deliver exceptional service, ensuring each 
                    client has a top-notch experience that meets their unique needs.
                </p>
                <div className="about-us-stats">
                    <div className="stat-item">
                        <p className="stat-number">25+</p>
                        <h2>PROJECTS</h2>
                    </div>
                    <div className="stat-item">
                        <p className="stat-number">5+</p>
                        <h2>YEARS OF EXPERIENCE</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
