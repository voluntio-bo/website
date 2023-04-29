import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import App from './App';
import NoPage from './views/NoPage';
import NavBar from './components/NavBar'

import OrganizationView from './views/OrganizationView'

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

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/organization" element={<OrganizationView />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
  

theme = responsiveFontSizes(theme);
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<ThemeProvider theme={theme}><NavBar/> <div style={{ marginTop: '11vh' }}></div>
  <Routing /></ThemeProvider>)