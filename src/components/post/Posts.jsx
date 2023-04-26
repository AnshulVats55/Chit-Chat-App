import React, { useState } from "react";

import { Stack } from "@mui/material";
import  {PostStyles} from './post.styles'
import Post from './Post'
import  api from './api';
export const Posts = () => {
  
  const [posts,setPosts] = useState()
 

  const { classes } = PostStyles();

  return (
    <Stack >

      <Post />
      

    </Stack>
  );
};
