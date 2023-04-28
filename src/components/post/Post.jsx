import { Box, Card } from "@mui/material";
import React from "react";
import { PostHeader } from "./PostHeader/PostHeader";
import { PostMedia } from "./PostMedia/PostMedia";
import { PostBody } from "./PostBody/PostBody";
import { PostAction } from "./postAction/PostAction";
import { PostStyles } from "./post.styles";
import postOneImage from '../../assets/create-account.jpg';

const Post = ({
  avatarLetter,
  title,
  postDate,
  image,
  content,
  likeCount,
  commentCount,
  cardStyles,
  onDelete
}) => {

  const { classes } = PostStyles();

  return (
    <Card className={classes.cardContainer}>
      <PostHeader />
      <Box className={classes.postMediaContainer}>
        <PostMedia image={image} className={classes.postMedia}/>
      </Box>
      <PostBody content={content} className={classes.postContent}/>
      <PostAction />
    </Card>
  );
};

export default Post;
