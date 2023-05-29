import React from "react";
import { Container } from "@mui/material";
import { feedStyle } from "./FeedStyle";
import { Posts } from "./post/Posts";

const FeedLayout = () => {
  const { classes } = feedStyle();

  return (
    <Container className={classes.container} maxWidth="xl">
      <Posts />
    </Container>
  );
};

export default FeedLayout;
