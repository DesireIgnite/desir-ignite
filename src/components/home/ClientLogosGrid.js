import React from 'react';
import { Grid, Container } from '@mui/material';
import '../../styles/home/ClientLogosGrid.css';

const clientLogos = Array.from({ length: 14 }, (_, i) => `${i + 1}`);

const ClientLogosGrid = () => {
    return (
        <Container className="client-logos-grid">
            <Grid container spacing={3} justifyContent="center">
                {clientLogos.map((logo, index) => (
                    <Grid item xs={6} sm={4} md={3} lg={2} key={index} className="client-logo-box">
                        <img
                            src={require(`../../assets/${logo}.png`)} // Dynamically require the image
                            alt={`Client logo ${logo}`}
                            className="client-logo"
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ClientLogosGrid;
