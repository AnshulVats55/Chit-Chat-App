import { Box, CardActions, Checkbox, IconButton, Modal, Dialog, Button } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import CommentIcon from "@mui/icons-material/Comment";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { PostActionStyles } from "./PostActionStyles";
import CommentWindow from '../../../components/simple-comments/ CommentWindow';


export const PostAction = ({ likeCount, commentCount, post }) => {

    const { classes } = PostActionStyles();
    const [showComments, setShowComments] = useState(false);
    // const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');

    const handleShowComments = (scrollType) => {
        setShowComments(!showComments);
        setScroll(scrollType);
    }

    const handleClose = () => {
        setShowComments(!showComments);
    };

    const descriptionElementRef = useRef(null);
    useEffect(() => {
        if (showComments) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
            descriptionElement.focus();
        }
        }
    }, [showComments]);

    // console.log(post);

  return (
    <CardActions className={classes.postActionCont}>
      <Box>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <span className={classes.Hide}>{post.likes.length} likes</span>
      </Box>

      <Box>
        <IconButton aria-label="comment" onClick={()=>{handleShowComments('paper')}}>
          <Checkbox
              icon={<CommentIcon />}
              checkedIcon={<CommentIcon />}
            />
        </IconButton>
        {
          showComments
          ?
          <CommentWindow
          handleClose={handleClose}
          open={showComments}
          scroll={scroll}
          descriptionElementRef={descriptionElementRef}
          post={post}
          />
          :
          <></>
        }
        <span className={classes.Hide}>{post.comments.length} comments</span>
      </Box>
    </CardActions>
  );
};

PostAction.defaultProps ={
    likeCount : '12',
    commentCount:'30'
}