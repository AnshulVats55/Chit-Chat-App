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
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import UserProfileIcon from "./UserProfileIcon";

import Logo from "../../assets/fiftyfive-logo.png";

const pagesScroll = [
  {
    to: "/",
    data: "Home",
  },

  {
    to: "/chat",
    data: "Chat",
  },
];

const Navbar = () => {
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
          <Box className={classes.menu}>
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
              <Link to="/profile">
                <img className={classes.img} src={Logo} alt="logo" />
              </Link>
            </Box>
            <Typography variant="h5" className={classes.h5}>
              Chit-Chat
            </Typography>
          </Box>

          <Box>
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
};
export default Navbar;
