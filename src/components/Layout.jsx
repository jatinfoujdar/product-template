import React from 'react';
import {ThemeProvider , createTheme, CssBaseline } from "@mui/material";
const theme = createTheme({
    pallete:{
        mode : "light",
    }
});


function Layout() {
  return (
    
    <ThemeProvider theme={theme}>
       <CssBaseline />
       <header></header>
       <main>display the content</main>
       <footer></footer>
    </ThemeProvider>
    

  )
}

export default Layout