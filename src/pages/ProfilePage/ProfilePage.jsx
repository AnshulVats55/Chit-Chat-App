import React from "react";
import { Link } from "react-router-dom";
import { Box, Container } from "@mui/material";
import UserPosts from "../../components/UserPosts/UserPosts";
import { getProfilePageStyles } from "./ProfilePage.styles";

import AddIcon from "@mui/icons-material/Add";

import UserProfileInfo from "../../components/UserProfileInfo/UserProfileInfo";
import ViewPostButton from "../../components/ViewPostButton/ViewPostButton";

const ProfilePage = ({ children }) => {
  const { classes } = getProfilePageStyles();

  return (
    <Box className={classes.profilePageTopContStyles}>
      <Container className={classes.profilePageContStyles} maxWidth="xl">
        <UserProfileInfo />
        <Box className={classes.userPostLabelConStyles}>
          <Link to="/" className={classes.createPostBtnContStyles}>
            <ViewPostButton
              children={<AddIcon fontSize="small" />}
              className={classes.createPostBtnStyles}
            />
          </Link>
        </Box>
        <UserPosts />
      </Container>
    </Box>
  );
};

export default ProfilePage;
