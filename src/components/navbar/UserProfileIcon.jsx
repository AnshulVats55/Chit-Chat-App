import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { NavbarStyles } from './Navbar.styles';
import {

  MenuItem,
  Tooltip,
  Avatar,
  Menu,
  IconButton,
  Box,
  Typography,
} from "@mui/material";

import { useToast } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { setUserData } from '../../store/slices/UserDataSlice';
 
const UserProfileIcon = () => {

    const [anchorElUser, setAnchorElUser] = useState(null);

    const { classes } = NavbarStyles();

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const userDetails = useSelector((state)=>{
      return state.userDataReducer[0];
    });

    const userProfilePicture = userDetails?.data.user.profilePicture,
          userFullName = userDetails?.data.user.firstName + " " + userDetails?.data.user.lastName;

    const toast = useToast();

    const navigate = useNavigate();
    const handleLogout = () => {
      localStorage.clear();
      toast({
          title: "You're successfully logged out !",
          position:'top',
          description: "",
          status: 'success',
          duration: 2000,
          isClosable: true,
      });
      setTimeout(()=>{
        window.location.reload();
        navigate("/");
      }, 2500);
    }

  return (
    <Box className={classes.userProfileCont}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu}>
          <Avatar
            alt="Remy Sharp"
            src={userProfilePicture}
            sx={{
              backgroundColor: "#363a91",
              '@media screen and (max-width: 350px)': {
                width:'30px',
                height:'30px',
                fontSize:'1rem',
              },
            }}
          />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
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
        <MenuItem onClick={handleCloseUserMenu}>
            <Link to="/profile" className={classes.link}>Profile</Link>
        </MenuItem>
        <MenuItem onClick={handleCloseUserMenu}>
            <Link className={classes.link} onClick={handleLogout}>Logout</Link>
        </MenuItem>
      </Menu>
      <Typography variant="body1" className={classes.userName}>{userFullName}</Typography>
    </Box>
  );
};

export default UserProfileIcon;