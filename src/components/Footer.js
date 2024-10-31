import React from 'react';
import { Typography, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Contact Section */}
                <div className="footer-section">
                    <Typography variant="h6" className="footer-title">Contact Us</Typography>
                    <Typography variant="body2">
                        Say hello at - <span className="highlight">desirignite@gmail.com</span>
                    </Typography>
                    <Typography variant="body2">
                        Contact No - <span className="highlight">9996777698 | 9653531169</span>
                    </Typography>
                </div>

                {/* Quick Links Section */}
                <div className="footer-section">
                    <Typography variant="h6" className="footer-title">Quick Links</Typography>
                    <ul className="footer-links">
                        <li><Link href="/" color="inherit">Home</Link></li>
                        <li><Link href="/services" color="inherit">Services</Link></li>
                        <li><Link href="/about-us" color="inherit">About Us</Link></li>
                        <li><Link href="/contact" color="inherit">Contact</Link></li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div className="footer-section">
                    <Typography variant="h6" className="footer-title">Connect With Us</Typography>
                    <div className="footer-socials">
                        <Link href="https://www.instagram.com/desir.ignite/" target="_blank" color="inherit">
                            <InstagramIcon fontSize="large" />
                        </Link>
                        <Link href="mailto:desirignite@gmail.com" target="_blank" color="inherit">
                            <EmailIcon fontSize="large" />
                        </Link>
                        <Link href="https://www.facebook.com/profile.php?id=61567822318611&mibextid=LQQJ4d" target="_blank" color="inherit">
                            <FacebookIcon fontSize="large" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Text */}
            <Typography variant="body2" color="textSecondary" className="footer-bottom">
                © 2024 Desir Ignite. All rights reserved.
            </Typography>
        </footer>
    );
};

export default Footer;
