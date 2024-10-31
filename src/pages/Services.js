import React from 'react';
import ServiceCard from '../components/services/ServiceCard';
import TestimonialsCarousel from '../components/services/TestimonialsCarousel';
import '../styles/services/Services.css';

const services = [
    {
        title: "Technology",
        description: "Serving Web Development, Managing Ecommerce and Content Management system.",
        approach: [
            "User-centric blueprints for websites that captivate and convert.",
            "Optimizing every byte for speed and reliability.",
            "Robust security and performance optimization to ensure exceptional user satisfaction"
        ],
        image: `https://i.ibb.co/r3b5ydw/1.png` // Updated path
    },
    {
        title: "Branding",
        description: "Building Brand Identity, defining brand tone and voice, and designing Packaging.",
        approach: [
            "Deep dives into market research and competitor analysis to identify unique brand positioning",
            "Storytelling workshops to collaboratively craft your brand narrative and messaging",
            "Vivid visual identity creation that embodies your brand's essence and resonates with your audience."
        ],
        image: `https://i.ibb.co/ry2PY3t/2.png` // Updated path
    },
    {
        title: "Digital Marketing",
        description: "Increasing 360° engagement through Ads, Content Creation, and Influencer Marketing.",
        approach: [
            "Content marketing that educates, entertains, and builds trust with your audience",
            "Social media management that sparks conversations and fosters community engagement"
        ],
        image: `https://i.ibb.co/rwTnDx2/3.png` // Updated path
    },
    {
        title: "3D CGI Ads | Graphic Design | Video Editing",
        description: "Complete solutions for Graphic Designing and Video Editing.",
        approach: [
            "Esthetically pleasing design that aligns seamlessly with your brand identity",
            "Conversion-focused visuals that guide users towards desired actions",
        ],
        image: `https://i.ibb.co/q1GZh0w/4.png` // Updated path
    },
    {
        title: "Architecture | Interior Design",
        description: "Architecture and Interior Design services in 2D and 3D rendered views.",
        approach: [
            "Analyzing the area and client requirements and giving plans accordingly",
            "Vastu-compliant home layouts",
            "Creating 3D renders with material updates"
        ],
        image: `https://i.ibb.co/3YstHL4/5.png` // Updated path
    }
];

const Services = () => {
    return (
        <div className="services-page">
            <h2 className="services-heading">Our Services</h2>
            <div className="services-list">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
            <TestimonialsCarousel />
        </div>
    );
};

export default Services;
