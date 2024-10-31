import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import '../../styles/home/HomeIntro.css?v=1.0';

const HomeIntro = () => {
    return (
        <Container className="home-intro">
            <Box className="home-intro-box">
                <Typography 
                    variant="h4" 
                    className="intro-title-primary"
                    style={{ fontSize: '2.5rem', color: '#ff3e3e', marginBottom: '0.5rem' }} // Inline styles for primary title
                >
                    We are
                </Typography>
                <Typography 
                    variant="h2" 
                    className="intro-title-main"
                    style={{ fontSize: '4rem', color: '#fff', marginBottom: '0.5rem', textShadow: '2px 2px 6px rgba(0, 0, 0, 0.9)' }} // Inline styles for main title
                >
                    CREATIVE DIGITAL HUB
                </Typography>
                <Typography 
                    variant="body1" 
                    className="home-intro-description"
                    style={{ color: '#B0BEC5', fontSize: '1.25rem' }} // Inline styles for description
                >
                    Company engaged in creating creative strategies to help clients achieve their business goals.
                </Typography>
            </Box>
        </Container>
    );
};

export default HomeIntro;
