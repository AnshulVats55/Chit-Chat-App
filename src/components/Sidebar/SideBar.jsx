import React from 'react'
import { barStyle } from './SideBar.style'
import HomeIcon from '@mui/icons-material/Home';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import LogoutIcon from '@mui/icons-material/Logout';
import { Typography, Box } from '@mui/material';
import { Link, useNavigate} from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useToast } from '@chakra-ui/react';
import { setSnackbar } from "../../store/slices/SnackBarSlice";
import message from "../../Constants"
import { useDispatch } from 'react-redux';


const SideBar = () => {
  const {classes}= barStyle();

  const toast = useToast();
  const navigate = useNavigate();
  const dispatch= useDispatch();

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
      dispatch(
        setSnackbar({
          snackbarOpen: true,
          snackbarType: message.SUCCESS,
          snackbarMessage: message.LOGOUT_SUCCESSFULLY
        })
      )
  

    
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
