import React from 'react';
import { NavLink } from 'react-router-dom';
import { Typography, Toolbar, AppBar } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <NavLink to="/">
          <Typography
            align="center"
            color="white"
            component="h4"
            variant="h4"
            gutterBottom
          >
            Fake Shope
          </Typography>
        </NavLink>
        {/* <NavLink to="/cart">Cart</NavLink> */}
      </Toolbar>
    </AppBar>
  );
};
export default Header;
