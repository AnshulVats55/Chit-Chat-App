import React from "react";
import { Box, Typography } from "@mui/material";
import { ListStyles } from "./FriendList.styles";
import { Avatar } from "@mui/material";

const SingleFriend = ({ detail, openChat }) => {
  const { classes } = ListStyles();
  const { id, firstName, lastName, profilePicture } = detail;
  return (
    <Box
      className={classes.single}
      key={id}
      onClick={() => openChat(id, firstName, lastName, profilePicture)}
    >
      <Box className={classes.single1}>
        <Avatar className={classes.avatar} alt="" src={profilePicture}></Avatar>
        <Box>
          <Typography sx={{ marginTop: "6px", fontSize: "1rem" }} variant="h6">
            {firstName + " " + lastName}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleFriend;
