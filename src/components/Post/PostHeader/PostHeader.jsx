import { Avatar, CardHeader, IconButton, Typography } from "@mui/material";

import React, { useContext } from "react";

import { PostHeaderStyles } from "./postHead.styles";

import PostContext from "../Posts";

import { useSelector } from "react-redux";

import DeleteModal from "../../DeleteModal/DeleteModal";

import MaleAvatar from "../../../assets/male avatar.jpg";

import FemaleAvatar from "../../../assets/female avatar.jpg";

export const PostHeader = ({ post, styles }) => {
  const { classes } = PostHeaderStyles(styles);

  const { loading = false } = { post, styles };

  const user = useSelector((state) => {
    return state.userDataReducer[0]?.data?.user;
  });

  const userProfilePicture = post["user.profilePicture"]
    ? post["user.profilePicture"]
    : user.profilePicture;

  const { handleDeletePost } = useContext(PostContext);

  const handleDelete = () => {
    handleDeletePost(post.id);
  };

  const currentUserId = useSelector((state) => {
    return state.userDataReducer[0]?.data?.user.id;
  });

  return (
    <CardHeader
      avatar={<Avatar aria-label="recipe" src={userProfilePicture}></Avatar>}
      action={
        <IconButton aria-label="settings">
          
          {currentUserId == post.userId ? <DeleteModal id={post.id} /> : <></>}
        
        </IconButton>
      }
      title={
        <Typography variant="body1" fontWeight={"bold"}>
          
          {(post["user.firstName"] ? post["user.firstName"] : user.firstName) +
            " " +
            (post["user.lastName"] ? post["user.lastName"] : user.lastName)}
          
        </Typography>
      }
      subheader={post.createdAt.substring(0, 10).split("-").reverse().join("-")}
    />
  );
};
