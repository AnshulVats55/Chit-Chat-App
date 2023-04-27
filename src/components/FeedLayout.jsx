import React from 'react'
import {Box,Typography, Container} from '@mui/material'
import {feedStyle} from './FeedStyle'
import Navbar from './navbar/Navbar';
import Sidebar from './Sidebar';
import {Posts} from './post/Posts';

const FeedLayout = () => {
  const { classes } = feedStyle();

  return (
    <Container className={classes.container} maxWidth="xl">
        <Posts/>
    </Container>
  )
}

export default FeedLayout;
