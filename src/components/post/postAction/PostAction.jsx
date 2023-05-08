import {
  Box,
  CardActions,
  Checkbox,
  IconButton,
  Modal,
  Dialog,
  Button,
} from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import CommentIcon from "@mui/icons-material/Comment";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { PostActionStyles } from "./PostActionStyles";
import CommentWindow from "../../../components/simple-comments/ CommentWindow";
import { useDispatch, useSelector } from "react-redux";
import {
  setPostCurrentLikes,
  increasePostLikes,
  decreasePostLikes,
} from "../../../store/slices/LikeSlice";
import { Navigate } from "react-router-dom";

export const PostAction = ({ commentCount, post }) => {
  const { classes } = PostActionStyles();

  const [showComments, setShowComments] = useState(false);
  const [scroll, setScroll] = useState("paper");
  const [isLiked, setIsLiked] = useState(false);
  const [likeId, setLikeId] = useState("");

  const currentUserId = useSelector((state) => {
    return state.userDataReducer[0].data.user.id;
  });

  const postId = post.id;

  const dispatch = useDispatch();

  const allPostDetails = useSelector((state) => {
    return state.likeDataReducer;
  });
  console.log(allPostDetails);

  let totalLikes;
  allPostDetails.map((post) => {
    if (post.postId == postId) {
      totalLikes = post.currentLikesCount;
    }
  });

  useEffect(() => {
    allPostDetails.map((post) => {
      post.usersWhoLiked.map((user) => {
        if (currentUserId === user.user.id) {
        }
      });
    });
  }, []);
  console.log(isLiked);

  const handleShowComments = (scrollType) => {
    setShowComments(!showComments);
    setScroll(scrollType);
    Navigate(0);
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

  //Likes functionality
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
        url: "http://172.16.1.135:8484/v1/like",
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
        url: `http://172.16.1.135:8484/v1/like/${likeId}`,
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
        {isLiked ? (
          <IconButton aria-label="add to favorites" onClick={handleLikes}>
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
        ) : (
          <IconButton aria-label="add to favorites" onClick={handleLikes}>
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
        )}

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
        <span className={classes.Hide}>{post.comments.length} comments</span>
      </Box>
    </CardActions>
  );
};

// PostAction.defaultProps ={
//     likeCount : '12',
//     commentCount:'30'
// }
