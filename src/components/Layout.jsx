import React from 'react';
import {ThemeProvider , createTheme, CssBaseline } from "@mui/material";
import Header from './Header';
import Home from '../pages/Home';
const theme = createTheme({
    pallete:{
        mode : "light",
    }
});


function Layout() {
  return (
    
    <ThemeProvider theme={theme}>
       <CssBaseline />
       <Header/>
       <Home />
       <main></main>
       <footer></footer>
    </ThemeProvider>
    

  )
}

export default Layout