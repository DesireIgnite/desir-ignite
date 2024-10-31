import React from 'react';
import { Grid, Container } from '@mui/material';
import '../../styles/home/ClientLogosGrid.css';

const clientLogos = [
    "https://i.ibb.co/jyqWqb0/1.png",
    "https://i.ibb.co/xDsKYqW/2.png",
    "https://i.ibb.co/vv5DDY1/3.png",
    "https://i.ibb.co/zhJjLJw/4.png",
    "https://i.ibb.co/GnwLc2n/5.png",
    "https://i.ibb.co/gvCDsQb/6.png",
    "https://i.ibb.co/vv5cyn9/7.png",
    "https://i.ibb.co/X3QjR77/8.png",
    "https://i.ibb.co/nkTvW51/9.png",
    "https://i.ibb.co/3k5vmgL/10.png",
    "https://i.ibb.co/yFMH7Vv/11.png",
    "https://i.ibb.co/6YPgqd6/12.png",
    "https://i.ibb.co/H7pPjDg/13.png",
    "https://i.ibb.co/1QRh284/14.png"
];

const ClientLogosGrid = () => {
    return (
        <Container className="client-logos-grid">
            <Grid container spacing={3} justifyContent="center">
                {clientLogos.map((logoUrl, index) => (
                    <Grid item xs={6} sm={4} md={3} lg={2} key={index} className="client-logo-box">
                        <img
                            src={logoUrl} // Use the hosted logo URLs
                            alt={`Client logo ${index + 1}`}
                            className="client-logo"
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ClientLogosGrid;
