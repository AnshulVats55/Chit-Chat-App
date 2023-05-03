import { Box, CardActions, Checkbox, IconButton, Modal, Dialog } from "@mui/material";
import React, { useState } from "react";
import CommentIcon from "@mui/icons-material/Comment";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { PostActionStyles } from "./PostActionStyles";
import Comments from "../../simple-comments/Comments";
import CommentWindow from '../../../components/simple-comments/ CommentWindow';

export const PostAction = ({ likeCount, commentCount }) => {

  const{classes} = PostActionStyles();
  const [showComments, setShowComments] = useState(false);

  const handleShowComments = () => {
      setShowComments(!showComments);
  }
  
  return (
    <CardActions className={classes.postActionCont}>
      <Box>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <span className={classes.Hide}>{likeCount} likes</span>
      </Box>

      <Box>
        <IconButton aria-label="comment" onClick={handleShowComments}>
          <Checkbox
              icon={<CommentIcon />}
              checkedIcon={<CommentIcon sx={{ color: "#363a91" }} />}
            />
        </IconButton>
        {
          showComments
          ?
          <CommentWindow>
            
          </CommentWindow>
          :
          <></>
        }
        <span className={classes.Hide}>{commentCount} comments</span>
      </Box>
    </CardActions>
  );
};

PostAction.defaultProps ={
    likeCount : '12',
    commentCount:'30'
}