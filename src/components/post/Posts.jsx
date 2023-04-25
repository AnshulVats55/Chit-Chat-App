import React, { useState } from "react";
import { Box, Grid, Stack } from "@mui/material";
import { PostStyles } from "./post.styles";
import Post from "./Post";
import postApi from "../../api/postApi";
import CreatePost from "./createPost/CreatePost";
import postOneImage from "../../assets/create-account.jpg";

export const Posts = () => {
  const userData = [
    {
      postMedia: postOneImage,
      postDesc: "Piyush Kumar",
    },
    {
      postMedia: postOneImage,
      postDesc: "Md Ishaq",
    },
    {
      postMedia: postOneImage,
      postDesc: "Piyush Kumar",
    },
    {
      postMedia: postOneImage,
      postDesc: "Md Ishaq",
    },
  ];

  const [posts, setPosts] = useState(userData);
  const handleCreatePost = (postData) => {
    setPosts([...posts, postData]);
  };

  const { classes } = PostStyles();

  return (
    <Box>
      <CreatePost createPost={handleCreatePost} />
      <Grid container spacing={2} className={classes.gridContainerStyles}>
        {posts.map((gridItem) => {
          return (
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <Post image={gridItem.postMedia} content={gridItem.postDesc} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
