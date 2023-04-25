import React from 'react'
import {Box,Typography} from '@mui/material'
import {feedStyle} from './FeedStyle'
import Navbar from './navbar/Navbar';

import Sidebar from './Sidebar';
import {Posts} from './post/Posts';

const FeedLayout = () => {
  const {classes}=feedStyle();
  return (
    <Box className={classes.container} sx={{overflowX:'hidden'}}>
          {/* <Box className={classes.box1}>
            <Navbar/>
          </Box>

          <Box className={classes.box2}>
            <Sidebar/>
          </Box> */}
  
          <Box className={classes.box3}>
               <Posts/>
          </Box>
  
  </Box>
  )
}

export default FeedLayout
