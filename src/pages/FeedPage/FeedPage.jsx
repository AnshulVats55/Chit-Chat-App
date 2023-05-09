import React from "react";
import { Box, Grid } from "@mui/material";
import { feedStyles } from "./FeedPage.styles";
import Posts from "../../components/post/Posts";
const FeedPage = () => {
  const { classes } = feedStyles();
  return (
    <Grid container spacing={2} className={classes.feedPageTopContStyles}>
      <Grid item xs={12} md={8} className={classes.box1}>
        <Posts />
      </Grid>
      
      <Grid item xs={6} md={4}>
        <Box className={classes.box2}>
          
        </Box>
      </Grid>
    </Grid>
  );
};

export default FeedPage;
