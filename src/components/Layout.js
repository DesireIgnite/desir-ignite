import React from 'react';
import Navbar from './Navbar';   // Import the Navbar component
import Footer from './Footer';   // Import the Footer component

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Navbar />
            <main>{children}</main>  {/* Main content for each page */}
            <Footer />
        </div>
    );
};

export default Layout;
