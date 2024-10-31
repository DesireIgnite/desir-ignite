import React from 'react';
import { Grid, Typography, Container, Box } from '@mui/material';
import '../../styles/home/Founders.css';

const founders = [
    { name: "Kanika & Angad", title: "COSIQ", image: 'https://i.ibb.co/2FTv81j/cosiq-founders.png' }, // Hosted image link
    { name: "Gopala Krishnan", title: "Inditech Technology Services Private Limited", image: 'https://i.ibb.co/YX0YH57/gopal.png' }, // Hosted image link
    { name: "Rajan Makkar", title: "Ray Skill & Management Institute", image: 'https://i.ibb.co/mNMPJvD/rajan.png' }, // Hosted image link
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
                                src={founder.image} // Use hosted image link
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
