// import { AddComment } from '@mui/icons-material'\
import React, { useState } from "react";
import CommentField from "./CommentField";
import { Grid, Stack, stackClasses } from "@mui/material";
import createComment from './comment/createComment'
import { commentStyles } from "./comment/comment.styles";
const Comments = () => {


  const commentData = [
    {
      id: 1,
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus consequuntur nam fugit nihil aliquam sed ipsam quis reiciendis, sunt, culpa maxime odio rem sint quaerat rerum nulla. Laudantium, corporis a!",
      createdAt: new Date().toDateString(),
      userId:'11',
      user: {
       
        firstName: "Jack",
        lastName: "Ryan",
        profilePic: "https://picsum.photos/id/1/200/300",
      },
    },
    {
      id: 2,
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus consequuntur nam fugit nihil aliquam sed ipsam quis reiciendis, sunt, culpa maxime odio rem sint quaerat rerum nulla. Laudantium, corporis a!",
      createdAt: new Date().toDateString(),
      userId:'22',
      user: {
      
        firstName: "Jack",
        lastName: "Ryan",
        profilePic: "https://picsum.photos/id/1/200/300",
      },
          },
        ];


      

  const [comments, setComments] = useState(commentData);
  const [showEdit, setShowEdit] = useState(false);
  const { classes } = commentStyles();

  const handleDelete=async(id)=>{
    const updatedComments = comments.filter(comments=>comments.id!==id)
    setComments(updatedComments)
}
  const addComment = async(text) => {
      
  };

  return (
    <Grid container >
      <Grid item xs={12}>
        <CommentField handleSubmit={addComment} />
      </Grid>
      <Grid item xs={12}>
        <Grid container item>
          {comments?.map((comment) => {
            return (
              <Grid item id={comment.id}>
              <createComment comment={comment} onDelete={handleDelete}/>
            </Grid>
            )          
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Comments;
