import React from 'react'
import { barStyle } from './SideBar.style'
import HomeIcon from '@mui/icons-material/Home';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import LogoutIcon from '@mui/icons-material/Logout';
import { Typography, Box } from '@mui/material';
import { Link, useNavigate} from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useToast } from '@chakra-ui/react';

const SideBar = () => {
  const {classes}= barStyle();

  const toast = useToast();
  const navigate = useNavigate();

  const sideBarRoutes = [
    {
      routeIcon: <HomeIcon fontSize='large' className={classes.itemIcon}/>,
      routeName: 'Home',
      routePath: '/'
    },
    {
      routeIcon: <ChatBubbleIcon fontSize='large' className={classes.itemIcon}/>,
      routeName: 'Chat',
      routePath: '/chat'
    },
    {
      routeIcon: <AccountBoxIcon fontSize='large' className={classes.itemIcon}/>,
      routeName: 'Profile',
      routePath: '/profile'
    },
  ]
  
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
      navigate("/")
      window.location.reload();
      
    }, 2500);
  };

  return (
  <Box className={classes.mainContainer}>
    <Box className={classes.containerOne}>
      {
        sideBarRoutes.map((route)=>{
          return(
            <Box className={classes.itemCont}>
              <Link to={route.routePath}>
                <Box className={classes.item}>
                    {route.routeIcon}
                    <Typography variant="body2" className={classes.itemText}>{route.routeName}</Typography>
                </Box>
              </Link>
            </Box>
          )
        })
      }
    </Box>

    <Box className={classes.containerOne}>
      <Box className={classes.itemCont}>
        <Link onClick={handleLogout}>
          <Box className={classes.item}>
              <LogoutIcon fontSize='large' className={classes.itemIcon}/>
              <Typography variant="body2" className={classes.itemText}>Logout</Typography>
          </Box>
        </Link>
      </Box>
    </Box>
  </Box>
  )
}

export default SideBar;