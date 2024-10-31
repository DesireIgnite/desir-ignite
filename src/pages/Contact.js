import React from 'react';
import '../styles/contact/Contact.css'; // Ensure the CSS is imported

const Contact = () => {
    return (
        <div>
            <div className="container">
                <div className="contact-header">Contact Us</div>
                <div className="iframe-container">
                    <iframe 
                        className="google-form" 
                        src="https://docs.google.com/forms/d/e/1FAIpQLSeo5bzwe4H3rtsiu2l1KaNhcQ-YFUL3RZCaj-egWYLNFp9bbg/viewform?embedded=true"
                        loading="lazy"
                        title="Contact Form"
                    >
                        Loading…
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
