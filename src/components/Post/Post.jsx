import { Box, Card } from "@mui/material";
import React from "react";
import { PostHeader } from "./PostHeader/PostHeader";
import { PostMedia } from "./PostMedia/PostMedia";
import { PostBody } from "./PostBody/PostBody";
import { PostAction } from "./postAction/PostAction";
import { PostStyles } from "./post.styles";

const Post = ({ post, postCreatorId }) => {
  console.log(post);
  const { classes } = PostStyles();

  return (
    <Card className={classes.cardContainer}>
      <PostHeader post={post} postCreatorId={postCreatorId} />
      <Box className={classes.postMediaContainer}>
        <PostMedia image={post.attachment} className={classes.postMedia} />
      </Box>
      <PostBody content={post.body} className={classes.postContent} />
      <PostAction post={post} />
    </Card>
  );
};

export default Post;
