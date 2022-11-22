import React from 'react';
import {ThemeProvider , createTheme, CssBaseline } from "@mui/material";
import Header from './Header';
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
       <main>display the content</main>
       <footer></footer>
    </ThemeProvider>
    

  )
}

export default Layout