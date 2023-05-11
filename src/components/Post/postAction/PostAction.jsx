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
  const currentUserId = useSelector((state) => {
    return state?.userDataReducer[0]?.data?.user?.id;
  });
  console.log('pppppppppp',currentPost)
  const dispatch = useDispatch();

  // let alreadyLikedId;
  // const alreadyLiked = post?.likes?.find(
  //   (obj) => {

  //    alreadyLikedId = obj.id
  //    return  obj.user.id === currentUserId
  //   } 
  // );
   let alreadyLiked ={
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

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (showComments) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [showComments]);


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
           {/* <Checkbox
            icon={<FavoriteBorder />}
            checked={isLiked}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />  */}
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
            descriptionElementRef={descriptionElementRef}
            post={post}
          />
        ) : (
          <></>
        )}
        <span className={classes.Hide}> comments</span>
      </Box>
    </CardActions>
  );
};
