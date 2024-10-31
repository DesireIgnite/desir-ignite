import React from 'react';
import { Grid, Typography, Container, Box } from '@mui/material';
import '../../styles/home/Founders.css';

const founders = [
    { name: "Kanika & Angad", title: "COSIQ", image: `${process.env.PUBLIC_URL}/assets/cosiq-founders.png` }, // Updated path
    { name: "Gopala Krishnan", title: "Inditech Technology Services Private Limited", image: `${process.env.PUBLIC_URL}/assets/gopal.png` }, // Updated path
    { name: "Rajan Makkar", title: "Ray Skill & Management Institute", image: `${process.env.PUBLIC_URL}/assets/rajan.png` }, // Updated path
];

const Founders = () => {
    return (
        <Container className="founders-section">
            <Typography 
                variant="h4" 
                color="secondary" 
                className="founders-title" 
                style={{ marginBottom: '3rem', fontWeight: 'bold' }} // Make it bold
            >
                Renowned Clients and Brands
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {founders.map((founder, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                        <Box className="founder-box" textAlign="center">
                            <img
                                src={founder.image} // Use the updated image property
                                alt={`${founder.name}`}
                                className="founder-image"
                            />
                            <Typography variant="h6" color="secondary">
                                {founder.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {founder.title}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Founders;
