import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import '../../styles/services/ServiceCard.css';

const ServiceCard = ({ title, description, approach, image }) => {
    return (
        <Card className="service-card">
            <CardContent>
                <div 
                    className="service-image-placeholder" 
                    style={{ backgroundImage: `url(${image})` }} 
                ></div>
                <Typography variant="h5" className="service-title">
                    {title}
                </Typography>
                <Typography variant="body2" className="service-description">
                    {description}
                </Typography>
                <Typography variant="subtitle1" className="service-approach">Our Approach:</Typography>
                <ul>
                    {approach.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
};

export default ServiceCard;
