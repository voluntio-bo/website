import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Reaction from './components/Reaction';
import NavBar from './components/NavBar';
import EventCard from './components/EventCard';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider, styled, responsiveFontSizes } from '@mui/material/styles'
  
let theme = createTheme({
typography: {
    fontFamily: `"Sora", sans-serif`,
    fontWeightRegular: 500,
    fontSize: 16,
    // h1 : {
    //     fontFamily : `"Poppins", sans-serif`,
    // },
    // h2 : {
    //     fontFamily : `"DM Sans", sans-serif`,
    //     fontWeight : 600,
    //     fontSize : 35
    // },
    // h3 : {
    //     fontFamily : `"DM Sans", sans-serif`,
    //     fontWeight : 600,
    //     fontSize : 30,
    // },
    // h4 : {
    //     fontFamily : `"DM Sans", sans-serif`,
    //     fontWeight : 600,
    //     fontSize : 25
    // },
    h6 : {
        fontWeight : 500,
        fontSize : 20,
        //letterSpacing: 0,
    },
    subtitle2 : {
        fontFamily : `"DM Sans", sans-serif`,
        fontWeight : 500,
        fontSize : 14,
        color : '#989a9f',
    }
},
});

theme = responsiveFontSizes(theme);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<ThemeProvider theme={theme}><App/></ThemeProvider>)