import React from 'react'
import {} from "@mui/material"
import { chatStyle } from './ChatLayout'

const ChatLayout = () => {
    const {classes}=chatStyle();
  return (
    <Box classes={classes.mainContainer}>
      <Box classes={classes.navContainer}>  This is navbar</Box>
      <Box classes={classes.sideContainer}>  This is sidebar</Box>


    </Box>
  )
}

export default ChatLayout
