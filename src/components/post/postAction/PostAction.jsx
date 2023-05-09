import { Box, CardActions, Checkbox, IconButton } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import CommentIcon from "@mui/icons-material/Comment";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { PostActionStyles } from "./PostActionStyles";
import CommentWindow from "../../../components/simple-comments/ CommentWindow";
import { useDispatch, useSelector } from "react-redux";
import {
  increasePostLikes,
  decreasePostLikes,
} from "../../../store/slices/LikeSlice";
import {
  increasePostComments,
  decreasePostComments,
} from "../../../store/slices/CommentSlice";

export const PostAction = ({ commentCount, post }) => {
  const { classes } = PostActionStyles();

  const [showComments, setShowComments] = useState(false);
  const [scroll, setScroll] = useState("paper");
  const [isLiked, setIsLiked] = useState(false);
  const [likeId, setLikeId] = useState("");

  const currentUserId = useSelector((state) => {
    return state?.userDataReducer[0]?.data?.user.id;
  });

  const dispatch = useDispatch();

  const allPostDetails = useSelector((state) => {
    return state.likeDataReducer;
  });

    const allCommentDetails = useSelector((state)=>{
      return state.commentDataReducer;
    });
    console.log(allCommentDetails);

    let totalLikes;
    const postId = post.id;
    allPostDetails.map((post)=>{
      if(post.postId == postId){
        totalLikes = post.currentLikesCount;
      }
    });

    let totalComments;
    allCommentDetails.map((post)=>{
        if(post.postId === postId){
          totalComments = post.currentCommentsCount;
        }
    })

    useEffect(()=>{
      allPostDetails.map((post)=>{
        post.usersWhoLiked.map((like)=>{
          if(currentUserId === like.user.id){
            setLikeId(like.id);
            setIsLiked(true);
          }
        });
      });
    },[]);
  

  const handleShowComments = (scrollType) => {
    setShowComments(!showComments);
    setScroll(scrollType);
    dispatch(increasePostComments({ postId: postId }));
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

  const axios = require("axios");
  let data = JSON.stringify({
    userId: currentUserId,
    postId: postId,
  });

  const handleLikes = async () => {
    if (!isLiked) {
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://five5chitchat-knnx.onrender.com/v1/like",
        headers: {
          token: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        mode: "no-mode",
        referrerPolicy: "no-referrer",
        data: data,
      };

      const response = await axios.request(config);
      console.log(response);
      if (response.data.status === "success") {
        setIsLiked(true);
        setLikeId(response.data.data.id);
        dispatch(
          increasePostLikes({ postId: postId, likeId: response.data.data.id })
        );
      }
    } else {
      let config = {
        method: "delete",
        maxBodyLength: Infinity,
        url: `https://five5chitchat-knnx.onrender.com/v1/like/${likeId}`,
        headers: {
          token: localStorage.getItem("token"),
        },
        mode: "no-mode",
        referrerPolicy: "no-referrer",
      };

      const response = await axios.request(config);
      console.log(response);
      if (response.data.status === "success") {
        setIsLiked(false);
        setLikeId("");
        dispatch(decreasePostLikes({ postId: postId }));
      }
    }
  };

  return (
    <CardActions className={classes.postActionCont}>
      <Box>
        <IconButton aria-label="add to favorites" onClick={handleLikes}>
          <Checkbox
            icon={<FavoriteBorder />}
            checked={isLiked}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <span className={classes.Hide}>{totalLikes} likes</span>
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
            scroll={scroll}
            descriptionElementRef={descriptionElementRef}
            post={post}
          />
        ) : (
          <></>
        )}
        <span className={classes.Hide}>{post?.comments?.length} comments</span>
      </Box>
    </CardActions>
  );
};
