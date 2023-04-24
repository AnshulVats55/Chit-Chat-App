import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavbarStyles } from "./Navbar.styles";

import {
  MenuItem,
  Tooltip,
  Avatar,
  Menu,
  IconButton,
  Box,
} from "@mui/material";

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

  return (
    <Box>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/2.jpg"
            className={classes.avatar}
          />
        </IconButton>
      </Tooltip>
      <Menu
        className={classes.menu}
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
