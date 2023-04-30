import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import App from './App';
import NoPage from './views/NoPage';
import NavBar from './components/NavBar';

import OrganizationView from './views/OrganizationView'

import { createTheme, ThemeProvider, styled, responsiveFontSizes } from '@mui/material/styles'
import CreateEvent from './views/CreateEvent';
  
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
        fontWeight : 600,
        fontSize : 19,
        //letterSpacing: 0,
    },
    body1 : {
      fontWeight : 500,
      fontSize: 16
    },
    body2 : {
      fontWeight : 600,
      fontSize: 18
    },
    subtitle2 : {
        fontFamily : `"DM Sans", sans-serif`,
        fontWeight : 300,
        fontSize : 14,
        color : '#989a9f',
    }
},
palette: {
  primary: {
    // light: will be calculated from palette.primary.main,
    main: '#FF8324', //orange
    // dark: will be calculated from palette.primary.main,
    contrastText: '#FFFFFF'
  },
  secondary: {
    light: '#0066ff',
    main: '#FFFFFF',
    // dark: will be calculated from palette.secondary.main,
    contrastText: '#0f141a',
  },
  // Provide every color token (light, main, dark, and contrastText) when using
  // custom colors for props in Material UI's components.
  // Then you will be able to use it like this: `<Button color="custom">`
  // (For TypeScript, you need to add module augmentation for the `custom` value)
  custom: {
    light: '#ffa726',
    main: '#f57c00',
    dark: '#ef6c00',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  text: {
    primary: '#0f141a',
    secondary: '#536471'
  },
  // Used by `getContrastText()` to maximize the contrast between
  // the background and the text.
  contrastThreshold: 3,
  // Used by the functions below to shift a color's luminance by approximately
  // two indexes within its tonal palette.
  // E.g., shift from Red 500 to Red 300 or Red 700.
  tonalOffset: 0.2,
},
});

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/crear-evento" element={<CreateEvent />} />
          <Route path="/organization/:organizationId" element={<OrganizationView />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
  

theme = responsiveFontSizes(theme);
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<ThemeProvider theme={theme}><NavBar/> <div style={{ marginTop: '11vh' }}></div>
  <Routing /></ThemeProvider>)
