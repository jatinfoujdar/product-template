import React from 'react'
import { AppBar, Badge, IconButton, Toolbar, Typography  } from '@mui/material'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartSharp"

function Header() {
  return <AppBar>
    <Toolbar>
        <Typography variant='h6' color="inherit" sx={{flexGrow:1}}>Flipkart</Typography>
        <IconButton size="large" aria-label="shows cart items count" color='inherit'>
         <Badge badgeContent={1}>
            <ShoppingCartIcon />
         </Badge>
        </IconButton>
    </Toolbar>
  </AppBar>
}

export default Header