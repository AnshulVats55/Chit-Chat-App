import React, { useState, useEffect } from "react";
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
import { useSelector } from "react-redux";

import MaleAvatar from "../../assets/male avatar.jpg";
import FemaleAvatar from "../../assets/female avatar.jpg";

import DisplayAlert from "../AlertBox/DisplayAlert";
import { changeDisplayState } from "../../store/slices/DisplayAlertSlice";
import { useDispatch } from "react-redux";

const UserProfileIcon = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { classes } = NavbarStyles();

  const [anchorElUser, setAnchorElUser] = useState(null);
  const [showAlertToast, setshowAlertToast] = useState({
    visiblity: false,
    message: "",
    status: "Success | Error |info",
  });

  useEffect(() => {
    if (showAlertToast.visiblity === true) {
      dispatch(changeDisplayState(showAlertToast));
      setTimeout(() => {
        setshowAlertToast({ visiblity: false, message: "" });
      }, 2000);
    }
  }, [showAlertToast, dispatch]);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const userDetails = useSelector((state) => {
    return state.userDataReducer[0];
  });

  const userProfilePicture = userDetails?.data?.user.profilePicture,
    userFullName =
      userDetails?.data?.user.firstName +
      " " +
      userDetails?.data?.user.lastName,
    userGender = userDetails?.data?.user.gender;

  const handleLogout = () => {
    localStorage.clear();
    setshowAlertToast({
      visiblity: true,
      message: "You're successfully logged out !",
      status: "success",
    });
    setTimeout(() => {
      navigate("/");
      window.location.reload();
    }, 2500);
  };

  return (
    <Box className={classes.userProfileCont}>
      {showAlertToast?.visiblity && <DisplayAlert />}
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
