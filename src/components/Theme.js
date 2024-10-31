// src/components/Theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000', // Dark theme background color
        },
        secondary: {
            main: '#e53935', // Accent color for highlights
        },
        text: {
            primary: '#FFFFFF', // White text color
            secondary: '#B0BEC5', // Lighter text color for subtitles
        },
    },
    typography: {
        fontFamily: "'Roboto', sans-serif",
        h2: { fontWeight: 700, fontSize: '2.5rem' },
        h4: { fontWeight: 500 },
        body1: { fontSize: '1rem', color: '#fff' },
    },
});

export default theme;
