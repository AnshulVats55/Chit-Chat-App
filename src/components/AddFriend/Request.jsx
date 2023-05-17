import React from 'react';
import SearchFriend from './SearchFriend';
import FriendRequests from './FriendRequests';
import { ListStyles } from "../FriendList/FriendList.styles";
import { Box } from '@mui/material';

const Request = ({ setshowAlertToast }) => {
  const { classes } = ListStyles();

  return (
    <Box className={classes.friendContStyles}>
      <SearchFriend setshowAlertToast={setshowAlertToast} />
      <FriendRequests setshowAlertToast={setshowAlertToast} />
    </Box>
  );
};

export default Request;
