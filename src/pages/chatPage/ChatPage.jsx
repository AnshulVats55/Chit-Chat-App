import React from 'react'
import {chatStyle} from  './ChatPage.styles'
import {Box,Grid} from '@mui/material'
import ChatWindow from '../../components/chatWindow/ChatWindow'
import Friends from '../../components/friendList/Friends'
const ChatPage = () => {
  const {classes}=chatStyle();
  return (
    
   <Box className={classes.container}>
    <Grid container spacing={3} className={classes.gridContainer} >
      <Grid item xs={10}  sm={5.75} md={4} lg={4} sx={{backgroundColor:""}}>
          <Friends className={classes.friendContainer}/>
      </Grid>

      <Grid item  xs={12} sm={6.25}md={8} lg={8} sx={{ display: { xs: 'none', sm: 'block' }, padding:"0.5rem"}} className={classes.chatContainer} >
          <ChatWindow />
      </Grid>
     
    </Grid>
    </Box>
  )
}

export default ChatPage
