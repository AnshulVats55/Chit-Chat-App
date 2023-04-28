<<<<<<< HEAD
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavbarStyles } from "./Navbar.styles";

import {
=======
import React,{useState} from "react";
import { Link } from 'react-router-dom';
import { NavbarStyles } from './Navbar.styles';


import {

>>>>>>> login
  MenuItem,
  Tooltip,
  Avatar,
  Menu,
  IconButton,
  Box,
} from "@mui/material";

<<<<<<< HEAD
const settings = [
  {
    to: "/userprofile",
    data: "Profile",
  },

  {
    to: "/userlogin",
    data: "Logout",
  },
];

const UserProfileIcon = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { classes } = NavbarStyles();
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
=======
const settings = [{
    to: '/userprofile',
    data: "Profile"
},

{
    to: '/userlogin',
    data: "Logout"
}];
 
const UserProfileIcon = () => {

    const [anchorElUser, setAnchorElUser] = useState(null);
    const {classes} = NavbarStyles()
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

>>>>>>> login

  return (
    <Box>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/2.jpg"
<<<<<<< HEAD
            className={classes.avatar}
=======
            sx={{
              backgroundColor: "#363a91",
              '@media screen and (max-width: 350px)': {
                width:'30px',
                height:'30px',
                fontSize:'1rem',
              },
            }}
>>>>>>> login
          />
        </IconButton>
      </Tooltip>
      <Menu
<<<<<<< HEAD
        className={classes.menu}
=======
        sx={{ mt: "45px" }}
>>>>>>> login
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Link to={setting.to} className={classes.link}>
              {setting.data}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default UserProfileIcon;
