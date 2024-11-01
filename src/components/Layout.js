import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Navbar />
            <main>{children}</main>
            <Footer />
            {/* Floating "Enquire Now" button with improved design, depth, and custom font */}
            <a
                href="https://wa.me/message/66WQ3INODSCXH1"  // Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    position: 'fixed',
                    right: '20px',
                    bottom: '20px',
                    background: 'linear-gradient(145deg, #25D366, #1EBE58)',  // Gradient for depth
                    color: '#fff',
                    padding: '12px 18px',
                    borderRadius: '35px',
                    textAlign: 'center',
                    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.3)',  // Stronger shadow for depth
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    fontFamily: "'Poppins', sans-serif",  // Set custom font family
                    zIndex: 1000,
                    transition: 'all 0.3s ease',
                    ...(window.innerWidth < 600
                        ? {
                              right: '15px',
                              bottom: '15px',
                              padding: '10px 15px',
                              fontSize: '14px',
                              borderRadius: '30px',
                          }
                        : {}),
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0px 10px 20px rgba(0, 0, 0, 0.4)';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 0.3)';
                }}
                onMouseDown={(e) => {
                    e.currentTarget.style.transform = 'scale(0.95)';
                    e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
                }}
                onMouseUp={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0px 8px 16px rgba(0, 0, 0, 0.3)';
                }}
            >
                {/* WhatsApp logo image */}
                <img
                    src="https://i.ibb.co/PcyRDsS/CITYPNG-COM-HD-White-Outline-Whats-App-Wa-Whats-App-Logo-Icon-PNG-2000x2000.png"
                    alt="WhatsApp Logo"
                    style={{
                        width: window.innerWidth < 600 ? '20px' : '24px',
                        height: window.innerWidth < 600 ? '20px' : '24px',
                    }}
                />
                Enquire Now
            </a>
        </div>
    );
};

export default Layout;
