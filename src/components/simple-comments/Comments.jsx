// import { AddComment } from '@mui/icons-material'\
import React, { useState } from "react";
import CommentField from "./CommentField";
import { Box, Grid, Stack, stackClasses, Container } from "@mui/material";

import { commentStyles } from "./comment/comment.styles";
import { useSelector } from "react-redux";
import Comment from "./comment/Comment";
import useCommentsContext from "./hooks/use-comment-context";

const Comments = () => {
  const { classes } = commentStyles();
  const{ comments, post } = useCommentsContext();
  const [showEdit, setShowEdit] = useState(false);


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
            }
            )
            
            }
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Comments;
