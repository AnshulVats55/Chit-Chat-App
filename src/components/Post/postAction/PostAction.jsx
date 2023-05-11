import React, { useState, useEffect, useRef } from "react";
import { Box, CardActions, Checkbox, IconButton } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { PostActionStyles } from "./PostActionStyles";
import CommentWindow from "../../Comments/comment/CommentModal";
import { useDispatch, useSelector } from "react-redux";
import { handleAddLikes,handleDeleteLikes } from "../../../api/services/PostLikes";
import { getAllPosts } from "../../../store/slices/PostDataSlice";

export const PostAction = ({ post }) => {
  const { classes } = PostActionStyles();

  const [showComments, setShowComments] = useState(false);
  
  const currentPost = post;
  console.log(currentPost)
  const currentUserId = useSelector((state) => {
    return state?.userDataReducer[0]?.data?.user?.id;
  });
  console.log('pppppppppp',currentPost)
  const dispatch = useDispatch();

   let alreadyLiked = {
     status :false,
     id:""
   }
   
  post?.likes?.forEach(like=>{
    if(like.user.id === currentUserId)
     {
       alreadyLiked.status = true;
       alreadyLiked.id = like.id
     }
  })
   
   const handleShowComments = (scrollType) => {
    setShowComments(!showComments);
  };

  const handleClose = () => {
    setShowComments(!showComments);
  };



  let data = JSON.stringify({
    userId: currentUserId,
    postId: post.id,
  });

  //handle likes
  const handlePostLikes = async () => {
    const response = alreadyLiked.status
      ? await handleDeleteLikes(alreadyLiked.id)
      : await handleAddLikes(data);
    console.log('-----------------',response);
    dispatch(getAllPosts());
  };

  return (
    <CardActions className={classes.postActionCont}>
      <Box>
        <IconButton aria-label="add to favorites" onClick={handlePostLikes}>
        {  
          alreadyLiked.status?<Favorite sx={{color: "red" }}/>:<FavoriteBorder /> 
        }
        </IconButton>
        <span className={classes.Hide}>{currentPost.likes?currentPost.likes.length:0} likes</span>
      </Box>

      <Box>
        <IconButton
          aria-label="comment"
          onClick={() => {
            handleShowComments("paper");
          }}
        >
          <Checkbox icon={<CommentIcon />} checkedIcon={<CommentIcon />} />
        </IconButton>
        {showComments ? (
          <CommentWindow
            handleClose={handleClose}
            open={showComments}
            scroll="paper"
            post={post}
          />
        ) : (
          <></>
        )}
        <span className={classes.Hide}>{currentPost.comments?currentPost.comments.length:0} comments</span>
      </Box>
    </CardActions>
  );
};
