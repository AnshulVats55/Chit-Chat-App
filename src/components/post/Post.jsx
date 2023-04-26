import { Box, Card } from '@mui/material'
import React from 'react'
import { PostHeader } from './PostHeader/PostHeader'
import { PostMedia } from './PostMedia/PostMedia'
import { PostBody } from './PostBody/PostBody'
import { PostAction } from './postAction/PostAction'
import  {PostStyles} from './post.styles'
const Post = ({
  avatarLetter,
  title,
  postDate,
  image,
  content,
  likeCount,
  commentCount,
  cardStyles,
}) => {
  const {classes} = PostStyles();
  return (
    <Card className={classes.card}>
        <PostHeader />
        <Box className={classes.container}>
          <PostMedia />
        </Box>

        <PostBody />
        <PostAction />
      </Card>
  )
}

export default Post;
