import React from 'react';
import { Grid, Typography, Container, Box } from '@mui/material';
import '../../styles/home/StatsSection.css?v=1.0';

const stats = [
    { label: "18+", description: "Worked with Brands" },
    { label: "INTERNATIONAL", description: "CLIENTS" },
    { label: "5+", description: "Years Experience" },
];

const StatsSection = () => {
    return (
        <Container className="stats-section">
            <Grid container spacing={4} justifyContent="center">
                {stats.map((stat, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                        <Box textAlign="center" className="stats-box">
                            <Typography
                                variant="h4"
                                className="anton-font"
                                style={{ fontFamily: 'Anton, sans-serif' }} // Ensures Anton font is applied
                            >
                                {stat.label}
                            </Typography>
                            <Typography variant="body1" className="description-text" style={{ color: '#B0BEC5' }}>
                                {stat.description}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default StatsSection;
