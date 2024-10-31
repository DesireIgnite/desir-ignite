import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../../styles/services/TestimonialsCarousel.css';

const TestimonialsCarousel = () => {
    const testimonials = [
        "I’ve worked with several marketing agencies in the past, but none compare to the professionalism and punctuality of this team. They delivered a tailored social media strategy that perfectly aligned with our brand goals, and the results were outstanding. The fact that they offer everything from graphic design to web development made the entire process seamless. Highly recommended for any business owner looking for a reliable digital marketing partner!",
        
        "As a small business owner, I needed a marketing service that could do it all without breaking the bank. This company provided just that, with a comprehensive, customized plan that covered everything I needed, from brand presence to influencer marketing. Their team is incredibly organized, and they met every deadline we discussed. I’m more than impressed with the results and look forward to working with them long-term.",
        
        "I hired them for e-commerce management and web development, and they exceeded my expectations. Their team crafted a strategy specifically for my business, taking into account all my requirements and sticking to my budget. Their commitment to deadlines has been top-notch. I would recommend them to anyone looking for a trusted, all-in-one marketing solution.",
        
        "Our company needed a digital facelift, and this team delivered beyond expectations. They managed everything, from social media campaigns to graphic design. The customized approach they provided helped us stand out, and the pricing was competitive. The results speak for themselves; our brand presence has significantly improved!"
    ];

    return (
        <div className="testimonials-section">
            <h2>Testimonials</h2>

            {/* Dark Grey Grid Overlay */}
            <div className="grid-overlay"></div>

            {/* Testimonial Carousel */}
            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showArrows={false}
                interval={5000}
                transitionTime={600}
                emulateTouch
                className="testimonials-carousel"
            >
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-slide">
                        <p>{testimonial}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default TestimonialsCarousel;
