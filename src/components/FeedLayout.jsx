import React from 'react'
import {Box,Typography} from '@mui/material'
import {feedStyle} from './FeedStyle'

const FeedLayout = () => {
  const {classes}=feedStyle();
  return (
    <Box className={classes.container}>
          <Box className={classes.box1}>
            THis is a Navbar
          </Box>

          <Box className={classes.box2}>
          THis is a Sidebar
          </Box>
  
          <Box className={classes.box3}>
          <Typography variant="h1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
              neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
              quasi quidem quibusdam.
            </Typography>
          </Box>
  
  </Box>
  )
}

export default FeedLayout
