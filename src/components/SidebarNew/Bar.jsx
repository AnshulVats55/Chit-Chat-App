import React from 'react'
import { barStyle } from './Bar.style'
import HomeIcon from '@mui/icons-material/Home';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import GroupsIcon from '@mui/icons-material/Groups';
import LogoutIcon from '@mui/icons-material/Logout';
import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Bar = () => {
  const {classes}= barStyle();

  return (
  <Box className={classes.mainContainer}>
    <Box className={classes.containerOne}>

      <Box className={classes.itemCont}>
        <Link to="/">
          <Box className={classes.item}>
              <HomeIcon fontSize='large' className={classes.itemIcon}/>
              <Typography variant="body2" className={classes.itemText}>Home</Typography>
          </Box>
        </Link>
      </Box>
     
      <Box className={classes.itemCont}>
        <Link to="/chat">
          <Box className={classes.item}>
              <ChatBubbleIcon fontSize='large' className={classes.itemIcon}/>
              <Typography variant="body2" className={classes.itemText}>Chat</Typography>
          </Box>
        </Link>
      </Box>

      <Box className={classes.itemCont}>
        <Link to="/group">
          <Box className={classes.item}>
              <GroupsIcon fontSize='large' className={classes.itemIcon}/>
              <Typography variant="body2" className={classes.itemText}>Group</Typography>
          </Box>
        </Link>
      </Box>
         
      <Box className={classes.itemCont}>
        <Link to="/profile">
          <Box className={classes.item}>
              <AccountBoxIcon fontSize='large' className={classes.itemIcon}/>
              <Typography variant="body2" className={classes.itemText}>Profile</Typography>
          </Box>
        </Link>
      </Box>

    </Box>

    <Box className={classes.containerOne}>

      <Box className={classes.itemCont}>
        <Link>
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

export default Bar
