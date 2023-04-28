import { Box, CardActions, Checkbox, IconButton } from "@mui/material";
import React from "react";
import CommentIcon from "@mui/icons-material/Comment";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { PostActionStyles } from "./PostActionStyles";

export const PostAction = ({ likeCount, commentCount }) => {

  const{classes} = PostActionStyles();
  
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
        <IconButton aria-label="comment">
        <Checkbox
            icon={<CommentIcon />}
            checkedIcon={<CommentIcon sx={{ color: "#363a91" }} />}
          />
        </IconButton>
        <span className={classes.Hide}>{commentCount} comments</span>
      </Box>
    </CardActions>
  );
};

PostAction.defaultProps ={
    likeCount : '12',
    commentCount:'30'
}