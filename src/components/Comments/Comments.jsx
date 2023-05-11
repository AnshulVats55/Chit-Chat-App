import React from "react";
import { Box, Grid, Container } from "@mui/material";
import { commentStyles } from "../Comments/comment.styles";
import Comment from "./comment/Comment";
import useCommentsContext from "./hooks/use-comment-context";

const Comments = () => {
  const { classes } = commentStyles();
  const{ comments, post } = useCommentsContext();

  return (
    <Box className={classes.commentTopContStyles}>
      <Container className={classes.commentContainer}>
        <Grid container className={classes.gridContainerStyles}>
          <Grid item xs={12} className={classes.gridItemStyles}>
            {
            comments?.map((comment) => 
            {
              console.log(comment);
              return (
                <Comment 
                  key ={comment.id}
                  comment={comment}
                  className={classes.commentCardStyles}
                />
              );
            })
            }
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Comments;
