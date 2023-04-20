import React from "react";
import { Post } from "./post/Post";
import { Box, Grid } from "@mui/material";

const Feed = () => {
  return (
    <Grid container justifyContent="flex-center" spacing={2}>
      <Grid item>
        <Post />
      </Grid>
      <Grid item>
        <Post />
      </Grid>
      <Grid item>
        <Post />
      </Grid>

      <Grid item>
        <Post />
      </Grid><Grid item>
        <Post />
      </Grid>
     
    </Grid>
  );
};

export default Feed;
