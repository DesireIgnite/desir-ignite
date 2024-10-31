import React from 'react';
import { AppBar, Toolbar, Button, IconButton, Menu, MenuItem } from '@mui/material';
import { NavLink, Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';
import '../styles/Navbar.css';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMobile = useMediaQuery('(max-width:600px)'); // Adjust breakpoint as needed

    const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

    // Fetch logo from hosting link
    const logoImageUrl = 'https://i.ibb.co/hgmQS7n/logo.png';
    const portfolio = `${process.env.PUBLIC_URL}/assets/portfolio.pdf`; // Leave portfolio path as is

    return (
        <AppBar position="static" color="primary">
            <Toolbar className="navbar-toolbar">
                {/* Make the logo clickable to go to the home page */}
                <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                    <img 
                        src={logoImageUrl} // Use hosted logo image
                        alt="Digital Ignite" 
                        className="navbar-logo" 
                    />
                </Link>

                <div className="navbar-links">
                    <NavLink to="/" className="navbar-link" activeClassName="active">
                        <Button color="inherit">Home</Button>
                    </NavLink>
                    <NavLink to="/services" className="navbar-link" activeClassName="active">
                        <Button color="inherit">Services</Button>
                    </NavLink>
                    <NavLink to="/about-us" className="navbar-link" activeClassName="active">
                        <Button color="inherit">About Us</Button>
                    </NavLink>
                    <NavLink to="/contact" className="navbar-link" activeClassName="active">
                        <Button color="inherit">Contact</Button>
                    </NavLink>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        href={portfolio} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="portfolio-button"
                    >
                        Portfolio
                    </Button>
                </div>

                {isMobile && (
                    <>
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenuOpen}
                            className="navbar-menu-icon"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                            <MenuItem onClick={handleMenuClose} component={NavLink} to="/" activeClassName="active">
                                Home
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose} component={NavLink} to="/services" activeClassName="active">
                                Services
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose} component={NavLink} to="/about-us" activeClassName="active">
                                About Us
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose} component={NavLink} to="/contact" activeClassName="active">
                                Contact
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose}>
                                <Button 
                                    variant="contained" 
                                    color="secondary" 
                                    href={portfolio} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="portfolio-button"
                                >
                                    Portfolio
                                </Button>
                            </MenuItem>
                        </Menu>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
