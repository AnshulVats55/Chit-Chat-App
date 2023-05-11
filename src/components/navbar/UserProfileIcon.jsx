import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavbarStyles } from "./Navbar.styles";
import {
  MenuItem,
  Tooltip,
  Avatar,
  Menu,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import { useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import MaleAvatar from '../../assets/male avatar.jpg';
import FemaleAvatar from '../../assets/female avatar.jpg';

const UserProfileIcon = () => {
  
  const navigate = useNavigate ();
  const { classes } = NavbarStyles();

  const [anchorElUser, setAnchorElUser] = useState(null);
  const toast = useToast();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const userDetails = useSelector((state) => {
    return state.userDataReducer[0];
  });

  const userProfilePicture = userDetails.data.user.profilePicture,
    userFullName =
      userDetails.data.user.firstName + " " + userDetails.data.user.lastName,
    userGender = userDetails.data.user.gender;

  const handleLogout = () => {
    localStorage.clear();
    toast({
      title: "You're successfully logged out !",
      position: "top",
      description: "",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    setTimeout(() => {
      navigate("/");
      window.location.reload();
    }, 2500);
  };

  return (
    <Box className={classes.userProfileCont}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu}>
          <Avatar
            alt="Remy Sharp"
            src={
              userProfilePicture
                ? userProfilePicture
                : userGender === "male"
                ? MaleAvatar
                : FemaleAvatar
            }
            className={classes.avatar}
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
          <Link to="/profile" className={classes.link}>
            Profile
          </Link>
        </MenuItem>
        <MenuItem onClick={handleCloseUserMenu}>
          <Link className={classes.link} onClick={handleLogout}>
            Logout
          </Link>
        </MenuItem>
      </Menu>
      <Typography variant="body1" className={classes.userName}>
        {userFullName}
      </Typography>
    </Box>
  );
};

export default UserProfileIcon;
