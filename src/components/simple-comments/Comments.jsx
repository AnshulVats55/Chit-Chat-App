// import { AddComment } from '@mui/icons-material'\
import React, { useState } from "react";
import CommentField from "./CommentField";
import { Box, Grid, Stack, stackClasses, Container } from "@mui/material";
import CreateComment from './comment/CreateComment'
import { commentStyles } from "./comment/comment.styles";
import { useSelector } from "react-redux";

const Comments = () => {

  const { classes } = commentStyles();

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
    {
      id: 3,
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus consequuntur nam fugit nihil aliquam sed ipsam quis reiciendis, sunt, culpa maxime odio rem sint quaerat rerum nulla. Laudantium, corporis a!",
      createdAt: new Date().toDateString(),
      userId:'22',
      user: {
      
        firstName: "Jack",
        lastName: "Ryan",
        profilePic: "https://picsum.photos/id/1/200/300",
      },
    },
    {
      id: 4,
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus consequuntur nam fugit nihil aliquam sed ipsam quis reiciendis, sunt, culpa maxime odio rem sint quaerat rerum nulla. Laudantium, corporis a!",
      createdAt: new Date().toDateString(),
      userId:'22',
      user: {
      
        firstName: "Jack",
        lastName: "Ryan",
        profilePic: "https://picsum.photos/id/1/200/300",
      },
    },
    {
      id: 5,
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

  const handleDelete=async(id)=>{
    const updatedComments = comments.filter(comments=>comments.id!==id)
    setComments(updatedComments)
  }
  
  // const addComment = async(text) => {
      
  // };
  const userCommentDetails = useSelector((state)=>{
      return state.commentDataReducer;
  });

  console.log(userCommentDetails);

  return (
    <Box className={classes.commentTopContStyles}>
      <Container className={classes.commentContainer}>
        <Grid container className={classes.gridContainerStyles}>

          <Grid item xs={12} className={classes.gridItemStyles}>
            {userCommentDetails?.map((comment) => {
                return (
                  <CreateComment id={comment.id} comment={comment.body} onDelete={handleDelete} className={classes.commentCardStyles} />
                );
            })}
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default Comments;
