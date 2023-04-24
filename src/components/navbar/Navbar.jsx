import React, { useState } from "react";
import { NavbarStyles } from "./Navbar.styles";
import {
  Typography,
  MenuItem,
  Container,
  Menu,
  IconButton,
  Box,
  AppBar,
} from "@mui/material";
import Logo from "../../assets/fiftyfive-logo-1.png";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import GroupsIcon from "@mui/icons-material/Groups";

import UserProfileIcon from "./UserProfileIcon";

const pages = [
  {
    to: "/",
    icon: <HomeIcon fontSize="large"></HomeIcon>,
  },

  {
    to: "/chat",
    icon: <ChatIcon fontSize="large"></ChatIcon>,
  },

  {
    to: "/groups",
    icon: <GroupsIcon fontSize="large"></GroupsIcon>,
  },
];
const pagesScroll = [
  {
    to: "/",
    data: "Home",
  },

  {
    to: "/chat",
    data: "Chat",
  },

  {
    to: "/groups",
    data: "Groups",
  },
];
function Navbar() {
  const { classes } = NavbarStyles();

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar className={classes.container}>
      <Container maxWidth="xl">
        <Box className={classes.mainContainer}>
          <Box className={classes.container1}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon className={classes.h5} />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pagesScroll.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={page.to} className={classes.link}>
                    {page.data}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box className={classes.left}>
            <Box className={classes.imgContainer}>
              <img className={classes.img} src={Logo} alt="logo" />
            </Box>
            <Typography variant="h5" className={classes.h5}>
              Chit-Chat
            </Typography>
          </Box>

          <Box className={classes.iconsContainer}>
            {pages.map((page) => (
              <Link
                to={page.to}
                key={page}
                onClick={handleCloseNavMenu}
                className={classes.icons}
              >
                {page.icon}
              </Link>
            ))}
          </Box>

          <Box className={classes.leftMain}>
            <Box className={classes.leftMain}>
              <Box className={classes.imgContainer}>
                <img className={classes.img} src={Logo} alt=" logo" />
              </Box>
              <Typography variant="h5" className={classes.h5}>
                Chit-Chat
              </Typography>
            </Box>
          </Box>

          <UserProfileIcon classes={classes} />
        </Box>
      </Container>
    </AppBar>
  );
}
export default Navbar;
