import React from "react";

import { PostStyles } from "./post.styles";
import { PostHeader } from "./PostHeader/PostHeader";
import { PostMedia } from "./PostMedia/PostMedia";
import { PostBody } from "./PostBody/PostBody";
import { PostAction } from "./postAction/PostAction";
import { Box, Card, Stack } from "@mui/material";

export const Post = ({
  avatarLetter,
  title,
  postDate,
  image,
  content,
  likeCount,
  commentCount,
  cardStyles,
}) => {
  const { classes } = PostStyles(cardStyles);

  return (
    <Stack className={classes.flexContain}>
      <Card >
        <PostHeader />
        <Box className={classes.container}>
          <PostMedia />
        </Box>

        <PostBody />
        <PostAction />
      </Card>
      <Card >
        <PostHeader />
        <Box className={classes.container}>
          <PostMedia />
        </Box>

        <PostBody />
        <PostAction />
      </Card>
    </Stack>
  );
};
