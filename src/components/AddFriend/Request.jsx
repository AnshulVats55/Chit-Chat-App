import React from 'react';
import SearchFriend from './SearchFriend';
import FriendRequests from './FriendRequests';
import { socket } from "../../pages/CommonLayout/CommonLayout";
import { useSelector } from "react-redux";
import { ListStyles } from "../FriendList/FriendList.styles";
import { Box } from '@mui/material';

const Request = () => {
  
  const { classes } = ListStyles();

  const userDetails = useSelector((state) => {
    return state.userDataReducer[0];
  });
  
  const userId = userDetails.data.user.id;
  const userFullName =userDetails.data.user.firstName + " " + userDetails.data.user.lastName;
  socket.emit("newUser", { id: userId, name: userFullName });

  return (
    <Box className={classes.friendContStyles}>
      <SearchFriend/>
      <FriendRequests/>
    </Box>
  )
}

export default Request;