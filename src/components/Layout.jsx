import React from 'react';
import {ThemeProvider , createTheme } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Header from './Header';
import Home from '../pages/Home';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});


function Layout() {
  return (
    
    <ThemeProvider theme={darkTheme}>
       <CssBaseline />
       <Header/>
       <Home />
       <main></main>
       <footer></footer>
    </ThemeProvider>
    

  )
}

export default Layout