import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import EmailIcon from '@mui/icons-material/Email';

export const Navbar = () => {
  return (
    <AppBar 
      position="stick" 
      sx={{display: {xs: "none", sm: "block"} }}
    >
      <Toolbar>
        <EmailIcon />
      </Toolbar>
    </AppBar>
  )
}