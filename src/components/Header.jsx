import React from 'react'
import { AppBar, Badge, IconButton, Toolbar, Typography, Box  } from '@mui/material'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartSharp"

function Header() {
  return <AppBar>
    <Toolbar>
        <Typography variant='h6' color="inherit" sx={{flexGrow:1}}>Flipkart</Typography>
        <Box sx={{display:{md:"flex"}}}>
        <IconButton size="large" aria-label="shows cart items count" color='inherit'>
         <Badge badgeContent={1}>
            <ShoppingCartIcon />
         </Badge>
        </IconButton>
        </Box>
    </Toolbar>
  </AppBar>
}

export default Header