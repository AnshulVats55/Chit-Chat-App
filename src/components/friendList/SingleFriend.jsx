import React from "react";
import { Box, Typography } from "@mui/material";
import { ListStyles } from "./FriendList.styles";
import { Avatar } from "@mui/material";

const SingleFriend = ({ detail }) => {
  const { classes } = ListStyles();
  const { image, id, userName, time, message } = detail;
  return (
    <Box className={classes.single} key={id}>
      <Box className={classes.single1}>
        <Avatar className={classes.avatar} alt="Remy Sharp" src={image}>
          B
        </Avatar>
        <Box>
          <Typography variant="h6">{userName}</Typography>
          <Typography variant="body2" className={classes.h6}>
            {message.slice(0, 25)}
          </Typography>
        </Box>
      </Box>
      <Typography variant="body2" className={classes.time}>
        {time}
      </Typography>
    </Box>
  );
};

export default SingleFriend;
