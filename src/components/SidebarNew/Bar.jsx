import React from 'react'
import { barStyle } from './Bar.style'
import HomeIcon from '@mui/icons-material/Home';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import GroupsIcon from '@mui/icons-material/Groups';
import LogoutIcon from '@mui/icons-material/Logout';
import {Typography,Box} from '@mui/material';
import { Link } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Bar = () => {
  const {classes}= barStyle();

  return (
   <Box className={classes.mainContainer}>

    <Box className={classes.containerOne}>

        <Box className={classes.item}>
          <Link to="/feed" className={classes.link}>
              <HomeIcon fontSize='large' className={classes.itemIcon}/>
          </Link>
          <Link to="/feed" className={classes.link}>
              <Typography variant="body2" className={classes.itemText}>Home</Typography>
          </Link>
        </Box>
      

     
        <Box className={classes.item}>
          <Link to="/chat" className={classes.link}>
            <ChatBubbleIcon fontSize='large' className={classes.itemIcon}/> 
          </Link>
          <Link to="/chat" className={classes.link}>
            <Typography variant="body2" className={classes.itemText}>Chat</Typography>
          </Link>
        </Box>
      

        
        <Box className={classes.item}>
          <Link to="/groups" className={classes.link}>
              <GroupsIcon fontSize='large' className={classes.itemIcon}/>
          </Link>
          <Link to="/groups" className={classes.link}>
              <Typography variant="body2" className={classes.itemText}>Group</Typography>
          </Link>
        </Box>
         

        <Box className={classes.item}>
          <Link to="/profile" className={classes.link}>
            <AccountBoxIcon fontSize='large' className={classes.itemIcon}/>
          </Link>
          <Link to="/profile" className={classes.link}>
              <Typography variant="body2" className={classes.itemText}>Profile</Typography>
          </Link>
        </Box>

    </Box>

     <Box className={classes.containerOne}>

        <Box className={classes.item}>
          <Link to="/userlogin" className={classes.link}>
            <LogoutIcon fontSize='large' className={classes.itemIcon}/>
          </Link>
          <Link to="/profile" className={classes.link}>
              <Typography variant="body2" className={classes.itemText}>Logout</Typography>
          </Link>
        </Box>

    </Box>
    </Box>
  )
}

export default Bar
