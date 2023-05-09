import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { commentStyles } from "./comment.styles";

import useCommentsContext from "../hooks/use-comment-context";
import { useSelector } from "react-redux";

import MaleAvatar from '../../../assets/male avatar.jpg';
import FemaleAvatar from '../../../assets/female avatar.jpg';

const Comment = ({ comment }) => {

  const user = useSelector((state) => {
    return state.userDataReducer[0].data.user;
  });
  console.log(user);
  
  const { classes } = commentStyles();
  const { deleteCommentById } = useCommentsContext();
  
  const handleDelete = () => {
    deleteCommentById(comment.id);
  };

  return (
    <Card className={classes.commentTopCardStyles}>
      <CardHeader
        avatar={<Avatar src={comment?.user?.profilePicture ? comment?.user?.profilePicture : user.gender == "male" ? MaleAvatar : FemaleAvatar}></Avatar>}
        action={
          <IconButton onClick={handleDelete}>
            <DeleteIcon className={classes.deleteIconStyles} />
          </IconButton>
        }
        title={`${
          comment?.user?.firstName ? comment?.user?.firstName : user.firstName
        } ${comment?.user?.lastName ? comment?.user?.lastName : user.lastName}`}
        subheader={comment?.createdAt.substring(0, 10).split("-").reverse().join("-")}
      />

      <CardContent>
        <Typography variant="body2" color="#000">
          {comment?.body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Comment;
