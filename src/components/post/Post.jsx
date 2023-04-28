import { Box, Card } from "@mui/material";
import React,{useContext} from "react";
import { PostHeader } from "./PostHeader/PostHeader";
import { PostMedia } from "./PostMedia/PostMedia";
import { PostBody } from "./PostBody/PostBody";
import { PostAction } from "./postAction/PostAction";
import { PostStyles } from "./post.styles";
import postOneImage from '../../assets/create-account.jpg';
import PostContext from "./Posts";

const Post = ({
 
  // avatarLetter,
  // title,
  // postDate,
  // image,
  // content,
  // likeCount,
  // commentCount,
  // cardStyles,
  id,
  post
}) => {

  const { classes } = PostStyles();

  return (
    <Card className={classes.cardContainer}>
      <PostHeader post={post} />
      <Box className={classes.postMediaContainer}>
        <PostMedia image={post.attachment} className={classes.postMedia}/>
      </Box>
      <PostBody content={post.body} className={classes.postContent}/>
      <PostAction />
    </Card>
  );
};

export default Post;
